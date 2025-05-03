import type React from "react";

export type ServiceData = {
	title: string;
	description: string;
	image: string;
	features: {
		title: string;
		description: string;
		icon: string; // Changed from React.ReactNode to string
	}[];
	howItWorks: {
		title: string;
		description: string;
	}[];
	faqs: {
		question: string;
		answer: string;
	}[];
};

const services: Record<string, ServiceData> = {
	crypto: {
		title: "Crypto Investment",
		description:
			"Unlock the potential of your financial future with our cutting-edge cryptocurrency advisory service. Whether you're a beginner or a seasoned investor, we provide expert guidance, personalized strategies, and powerful portfolio management tools to navigate the fast-paced crypto market. Stay ahead with real-time market analytics, secure asset storage, and tailored insights designed to maximize returns and minimize risks. Join our community of savvy investors and take control of your wealth in the digital age.",
		image: "/crypto.jpg",
		features: [
			{
				title: "Diversified Crypto Portfolio",
				description:
					"Access a wide range of cryptocurrencies with expert-curated portfolios.",
				icon: "Bitcoin",
			},
			{
				title: "Real-time Market Analysis",
				description:
					"Stay informed with real-time market data and expert analysis.",
				icon: "LineChart",
			},
			{
				title: "Secure Wallet Integration",
				description:
					"Connect your existing wallets or use our secure built-in wallet.",
				icon: "PiggyBank",
			},
			{
				title: "Automated Trading Strategies",
				description:
					"Set up automated trading strategies based on market conditions.",
				icon: "Building",
			},
			{
				title: "Educational Resources",
				description:
					"Learn about blockchain technology and cryptocurrency investing.",
				icon: "Users",
			},
		],
		howItWorks: [
			{
				title: "Account Setup",
				description: "Create a dedicated investment account for yourself.",
			},
			{
				title: "Goal Definition",
				description:
					"Define specific financial goals for choosing to invest in crypto currencies..",
			},
			{
				title: "Investment Selection",
				description: "Choose from the range of available crypto investments.",
			},
			{
				title: "Regular Contributions",
				description:
					"Make regular contributions to grow the investment over time.",
			},
			{
				title: "Milestone Tracking",
				description: "Track progress toward important financial milestones.",
			},
		],
		faqs: [
			{
				question: "What types of children's investment accounts do you offer?",
				answer:
					"We offer 529 College Savings Plans, Coverdell Education Savings Accounts, UGMA/UTMA custodial accounts, and specialized children's investment portfolios designed for long-term growth.",
			},
			{
				question: "At what age should I start investing for my child?",
				answer:
					"The earlier you start, the better. Even small investments made when a child is born can grow significantly by the time they reach adulthood due to compound growth over many years.",
			},
			{
				question: "Who controls the money in a child's investment account?",
				answer:
					"For custodial accounts (UGMA/UTMA), parents or guardians control the account until the child reaches the age of majority (18-21 depending on state). For 529 plans, the account owner (typically the parent) maintains control regardless of the beneficiary's age.",
			},
			{
				question: "Can relatives contribute to my child's investment account?",
				answer:
					"Yes, most of our children's investment accounts allow contributions from relatives and friends, making them perfect for birthday gifts, holiday presents, or other special occasions.",
			},
			{
				question: "What happens to the investments when my child turns 18?",
				answer:
					"It depends on the account type. Custodial accounts transfer to the child's control at the age of majority. Educational accounts like 529 plans remain under the account owner's control but must be used for qualified educational expenses to maintain tax benefits.",
			},
		],
	},
	"hedge-fund": {
		title: "Hedge Fund Management",
		description:
			"Access exclusive hedge funds with lower entry barriers and professional management.",
		image: "/hedge-fund.jpg",
		features: [
			{
				title: "Exclusive Fund Access",
				description:
					"Invest in hedge funds previously only available to institutional investors.",
				icon: "LineChart",
			},
			{
				title: "Lower Minimum Investments",
				description:
					"Start with lower minimums than traditional hedge fund requirements.",
				icon: "PiggyBank",
			},
			{
				title: "Professional Management",
				description:
					"Benefit from experienced fund managers with proven track records.",
				icon: "Users",
			},
			{
				title: "Diversified Strategies",
				description:
					"Access a variety of investment strategies across different markets.",
				icon: "Building",
			},
			{
				title: "Transparent Reporting",
				description:
					"Receive detailed performance reports and portfolio insights.",
				icon: "Bitcoin",
			},
		],
		howItWorks: [
			{
				title: "Complete Investor Profile",
				description:
					"Fill out our comprehensive investor profile to determine eligibility.",
			},
			{
				title: "Select Hedge Funds",
				description:
					"Choose from our curated selection of hedge funds based on your goals.",
			},
			{
				title: "Fund Your Investment",
				description:
					"Transfer funds to your InvestWise account to initiate your investment.",
			},
			{
				title: "Regular Performance Updates",
				description:
					"Receive regular updates on your hedge fund investments' performance.",
			},
			{
				title: "Adjust as Needed",
				description:
					"Make adjustments to your hedge fund allocations as your goals change.",
			},
		],
		faqs: [
			{
				question: "What types of children's investment accounts do you offer?",
				answer:
					"We offer 529 College Savings Plans, Coverdell Education Savings Accounts, UGMA/UTMA custodial accounts, and specialized children's investment portfolios designed for long-term growth.",
			},
			{
				question: "At what age should I start investing for my child?",
				answer:
					"The earlier you start, the better. Even small investments made when a child is born can grow significantly by the time they reach adulthood due to compound growth over many years.",
			},
			{
				question: "Who controls the money in a child's investment account?",
				answer:
					"For custodial accounts (UGMA/UTMA), parents or guardians control the account until the child reaches the age of majority (18-21 depending on state). For 529 plans, the account owner (typically the parent) maintains control regardless of the beneficiary's age.",
			},
			{
				question: "Can relatives contribute to my child's investment account?",
				answer:
					"Yes, most of our children's investment accounts allow contributions from relatives and friends, making them perfect for birthday gifts, holiday presents, or other special occasions.",
			},
			{
				question: "What happens to the investments when my child turns 18?",
				answer:
					"It depends on the account type. Custodial accounts transfer to the child's control at the age of majority. Educational accounts like 529 plans remain under the account owner's control but must be used for qualified educational expenses to maintain tax benefits.",
			},
		],
	},
	retirement: {
		title: "Retirement Planning",
		description:
			"Secure your future with our retirement advisory services and personalized plans.",
		image: "/retirement.jpg",
		features: [
			{
				title: "Personalized Retirement Plans",
				description:
					"Custom retirement strategies based on your goals and timeline.",
				icon: "PiggyBank",
			},
			{
				title: "Tax-Efficient Investing",
				description:
					"Maximize returns with tax-advantaged retirement accounts.",
				icon: "LineChart",
			},
			{
				title: "Regular Rebalancing",
				description:
					"Automatic portfolio rebalancing to maintain optimal asset allocation.",
				icon: "Building",
			},
			{
				title: "Retirement Calculators",
				description:
					"Advanced tools to project retirement needs and track progress.",
				icon: "Users",
			},
			{
				title: "Social Security Optimization",
				description: "Strategies to maximize your Social Security benefits.",
				icon: "Bitcoin",
			},
		],
		howItWorks: [
			{
				title: "Account Setup",
				description: "Create a dedicated investment account for your child.",
			},
			{
				title: "Goal Definition",
				description: "Define specific financial goals for your child's future.",
			},
			{
				title: "Investment Selection",
				description: "Choose from age-appropriate investment strategies.",
			},
			{
				title: "Regular Contributions",
				description:
					"Make regular contributions to grow the investment over time.",
			},
			{
				title: "Milestone Tracking",
				description: "Track progress toward important financial milestones.",
			},
		],
		faqs: [
			{
				question: "What types of children's investment accounts do you offer?",
				answer:
					"We offer 529 College Savings Plans, Coverdell Education Savings Accounts, UGMA/UTMA custodial accounts, and specialized children's investment portfolios designed for long-term growth.",
			},
			{
				question: "At what age should I start investing for my child?",
				answer:
					"The earlier you start, the better. Even small investments made when a child is born can grow significantly by the time they reach adulthood due to compound growth over many years.",
			},
			{
				question: "Who controls the money in a child's investment account?",
				answer:
					"For custodial accounts (UGMA/UTMA), parents or guardians control the account until the child reaches the age of majority (18-21 depending on state). For 529 plans, the account owner (typically the parent) maintains control regardless of the beneficiary's age.",
			},
			{
				question: "Can relatives contribute to my child's investment account?",
				answer:
					"Yes, most of our children's investment accounts allow contributions from relatives and friends, making them perfect for birthday gifts, holiday presents, or other special occasions.",
			},
			{
				question: "What happens to the investments when my child turns 18?",
				answer:
					"It depends on the account type. Custodial accounts transfer to the child's control at the age of majority. Educational accounts like 529 plans remain under the account owner's control but must be used for qualified educational expenses to maintain tax benefits.",
			},
		],
	},
	"real-estate": {
		title: "Real Estate Investment",
		description:
			"Diversify your portfolio with real estate investments and property management.",
		image: "/real-estate.jpg",
		features: [
			{
				title: "Diversified Property Exposure",
				description:
					"Access residential, commercial, and industrial real estate investments.",
				icon: "Building",
			},
			{
				title: "REITs and Property Funds",
				description:
					"Invest in Real Estate Investment Trusts and specialized property funds.",
				icon: "LineChart",
			},
			{
				title: "Fractional Ownership",
				description:
					"Own portions of high-value properties with lower capital requirements.",
				icon: "PiggyBank",
			},
			{
				title: "Global Real Estate Access",
				description:
					"Invest in properties across different geographic markets.",
				icon: "Users",
			},
			{
				title: "Automated Income Distribution",
				description: "Receive regular rental income and appreciation updates.",
				icon: "Bitcoin",
			},
		],
		howItWorks: [
			{
				title: "Account Setup",
				description: "Create a dedicated investment account for your child.",
			},
			{
				title: "Goal Definition",
				description: "Define specific financial goals for your child's future.",
			},
			{
				title: "Investment Selection",
				description: "Choose from age-appropriate investment strategies.",
			},
			{
				title: "Regular Contributions",
				description:
					"Make regular contributions to grow the investment over time.",
			},
			{
				title: "Milestone Tracking",
				description: "Track progress toward important financial milestones.",
			},
		],
		faqs: [
			{
				question: "What types of children's investment accounts do you offer?",
				answer:
					"We offer 529 College Savings Plans, Coverdell Education Savings Accounts, UGMA/UTMA custodial accounts, and specialized children's investment portfolios designed for long-term growth.",
			},
			{
				question: "At what age should I start investing for my child?",
				answer:
					"The earlier you start, the better. Even small investments made when a child is born can grow significantly by the time they reach adulthood due to compound growth over many years.",
			},
			{
				question: "Who controls the money in a child's investment account?",
				answer:
					"For custodial accounts (UGMA/UTMA), parents or guardians control the account until the child reaches the age of majority (18-21 depending on state). For 529 plans, the account owner (typically the parent) maintains control regardless of the beneficiary's age.",
			},
			{
				question: "Can relatives contribute to my child's investment account?",
				answer:
					"Yes, most of our children's investment accounts allow contributions from relatives and friends, making them perfect for birthday gifts, holiday presents, or other special occasions.",
			},
			{
				question: "What happens to the investments when my child turns 18?",
				answer:
					"It depends on the account type. Custodial accounts transfer to the child's control at the age of majority. Educational accounts like 529 plans remain under the account owner's control but must be used for qualified educational expenses to maintain tax benefits.",
			},
		],
	},
	children: {
		title: "Children Investment",
		description:
			"Start building wealth for your children's future with dedicated investment accounts.",
		image: "/children.jpg",
		features: [
			{
				title: "Education Savings Plans",
				description:
					"Tax-advantaged accounts specifically for education expenses.",
				icon: "Users",
			},
			{
				title: "Custodial Investment Accounts",
				description:
					"Invest on behalf of your child until they reach adulthood.",
				icon: "PiggyBank",
			},
			{
				title: "Age-Based Portfolios",
				description: "Investment strategies that adjust as your child grows.",
				icon: "LineChart",
			},
			{
				title: "Financial Literacy Tools",
				description: "Resources to teach children about money and investing.",
				icon: "Building",
			},
			{
				title: "Goal-Based Investing",
				description: "Set specific financial goals for your child's future.",
				icon: "Bitcoin",
			},
		],
		howItWorks: [
			{
				title: "Account Setup",
				description: "Create a dedicated investment account for your child.",
			},
			{
				title: "Goal Definition",
				description: "Define specific financial goals for your child's future.",
			},
			{
				title: "Investment Selection",
				description: "Choose from age-appropriate investment strategies.",
			},
			{
				title: "Regular Contributions",
				description:
					"Make regular contributions to grow the investment over time.",
			},
			{
				title: "Milestone Tracking",
				description: "Track progress toward important financial milestones.",
			},
		],
		faqs: [
			{
				question: "What types of children's investment accounts do you offer?",
				answer:
					"We offer 529 College Savings Plans, Coverdell Education Savings Accounts, UGMA/UTMA custodial accounts, and specialized children's investment portfolios designed for long-term growth.",
			},
			{
				question: "At what age should I start investing for my child?",
				answer:
					"The earlier you start, the better. Even small investments made when a child is born can grow significantly by the time they reach adulthood due to compound growth over many years.",
			},
			{
				question: "Who controls the money in a child's investment account?",
				answer:
					"For custodial accounts (UGMA/UTMA), parents or guardians control the account until the child reaches the age of majority (18-21 depending on state). For 529 plans, the account owner (typically the parent) maintains control regardless of the beneficiary's age.",
			},
			{
				question: "Can relatives contribute to my child's investment account?",
				answer:
					"Yes, most of our children's investment accounts allow contributions from relatives and friends, making them perfect for birthday gifts, holiday presents, or other special occasions.",
			},
			{
				question: "What happens to the investments when my child turns 18?",
				answer:
					"It depends on the account type. Custodial accounts transfer to the child's control at the age of majority. Educational accounts like 529 plans remain under the account owner's control but must be used for qualified educational expenses to maintain tax benefits.",
			},
		],
	},
};

export function getServiceData(service: string): ServiceData | null {
	return services[service] || null;
}
