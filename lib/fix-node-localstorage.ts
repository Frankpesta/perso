/**
 * Node (e.g. v25 with experimental / misconfigured web storage) can expose
 * `globalThis.localStorage` without a working `getItem`. next-themes treats
 * any environment with `window` defined as a browser and calls
 * `localStorage.getItem`, which throws. Patch storage before other modules run.
 */
const memory = new Map<string, string>();

const noopStorage: Storage = {
	get length() {
		return memory.size;
	},
	clear() {
		memory.clear();
	},
	getItem(key: string) {
		return memory.get(key) ?? null;
	},
	key(index: number) {
		return [...memory.keys()][index] ?? null;
	},
	removeItem(key: string) {
		memory.delete(key);
	},
	setItem(key: string, value: string) {
		memory.set(key, value);
	},
};

function shouldPatch(): boolean {
	const ls = globalThis.localStorage as Storage | undefined;
	return Boolean(ls && typeof ls.getItem !== "function");
}

if (shouldPatch()) {
	Object.defineProperty(globalThis, "localStorage", {
		value: noopStorage,
		configurable: true,
		writable: true,
	});
}
