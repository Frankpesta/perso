"use client";

import { Bitcoin, LineChart, PiggyBank, Building, Users } from "lucide-react";
import type React from "react";

interface IconMapProps {
	name: string;
	className?: string;
}

export const IconMap = ({ name, className }: IconMapProps) => {
	const iconMap: Record<string, React.ReactNode> = {
		Bitcoin: <Bitcoin className={className} />,
		LineChart: <LineChart className={className} />,
		PiggyBank: <PiggyBank className={className} />,
		Building: <Building className={className} />,
		Users: <Users className={className} />,
	};

	return iconMap[name] || null;
};
