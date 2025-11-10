"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type TranslateElementConstructor = {
	new (
		options: {
			pageLanguage: string;
			includedLanguages?: string;
			layout?: unknown;
			autoDisplay?: boolean;
		},
		element: string
	): void;
	InlineLayout: {
		SIMPLE: unknown;
	};
};

declare global {
	interface Window {
		googleTranslateElementInit?: () => void;
		google?: {
			translate?: {
				TranslateElement?: TranslateElementConstructor;
			};
		};
	}
}

const SCRIPT_ID = "google-translate-script";
const SCRIPT_SRC =
	"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

const scriptState: {
	promise?: Promise<void>;
	initialized?: boolean;
} = {};

const loadGoogleTranslateScript = () => {
	if (typeof window === "undefined") return Promise.resolve();

	if (window.google?.translate?.TranslateElement) return Promise.resolve();

	if (!scriptState.promise) {
		scriptState.promise = new Promise<void>((resolve, reject) => {
			// ✅ Define the callback BEFORE appending the script
			window.googleTranslateElementInit = () => {
				scriptState.initialized = true;
				resolve();
			};

			let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
			if (!script) {
				script = document.createElement("script");
				script.id = SCRIPT_ID;
				script.src = SCRIPT_SRC;
				script.async = true;

				script.onerror = () => reject(new Error("Failed to load Google Translate script"));

				document.head.appendChild(script);
			}
		});
	}

	return scriptState.promise;
};

type GoogleTranslateProps = {
	className?: string;
	elementId?: string;
	pageLanguage?: string;
	includedLanguages?: string;
};

export function GoogleTranslate({
	className,
	elementId = "google_translate_element",
	pageLanguage = "en",
	includedLanguages,
}: GoogleTranslateProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let isMounted = true;

		// Prevent multiple initializations
		if (scriptState.initialized) {
			console.warn(
				"Google Translate already initialized. Only one instance is allowed per page."
			);
			return;
		}

		loadGoogleTranslateScript()
			.then(() => {
				if (!isMounted || !containerRef.current) return;

				const TranslateElement = window.google?.translate?.TranslateElement;
				if (!TranslateElement) return;

				// Clear and create a child element with the correct ID
				containerRef.current.innerHTML = "";
				const translateDiv = document.createElement("div");
				translateDiv.id = elementId;
				containerRef.current.appendChild(translateDiv);

				new TranslateElement(
					{
						pageLanguage,
						includedLanguages,
						layout: TranslateElement.InlineLayout.SIMPLE,
						autoDisplay: false,
					},
					elementId
				);

				scriptState.initialized = true;
			})
			.catch((error) => {
				console.error(error);
			});

		return () => {
			isMounted = false;
			// Do not reset `scriptState.initialized`, Google Translate doesn't support re-init
		};
	}, [elementId, includedLanguages, pageLanguage]);

	return (
		<div
			ref={containerRef}
			className={cn(
				"flex min-w-[160px] items-center rounded-md border bg-background px-2 py-1 text-xs text-foreground shadow-sm",
				"[&_.goog-te-gadget]:m-0 [&_.goog-te-gadget]:p-0 [&_.goog-te-gadget]:text-current",
				"[&_.goog-te-combo]:w-full [&_.goog-te-combo]:rounded [&_.goog-te-combo]:border [&_.goog-te-combo]:bg-background [&_.goog-te-combo]:px-2 [&_.goog-te-combo]:py-1 [&_.goog-te-combo]:text-sm",
				"[&_.goog-logo-link]:hidden [&_.goog-te-gadget span]:hidden",
				className
			)}
		/>
	);
}
