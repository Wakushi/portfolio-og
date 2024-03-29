import weabove from "./assets/images/weabove.png"
import todo from "./assets/images/todo.png"
import blog from "./assets/images/english-blog.png"
import fundme from "./assets/images/fundme.png"
import kanga from "./assets/images/kanga.png"
import paths from "./assets/images/paths.png"
import quizAngular from "./assets/images/quiz-angular.png"
import helixVault from "./assets/images/helix-vault.png"
import smartLottery from "./assets/images/lottery.png"
import multisig from "./assets/images/multisig.webp"

export default [
	{
		img: multisig,
		desc: "MultiSig Factory is a web app that allows anyone to create and manage a MultiSig wallet. Users can easily create, confirm and execute transactions from their multi-signature wallet. (Sepolia testnet only)",
		type: "dApp",
		title: "MultiSig Factory",
		gitlink: "https://github.com/Wakushi/multisig-wallet-factory",
		link: "https://multisig-wallet-factory.vercel.app/"
	},
	{
		img: paths,
		desc: "Paths is a Reigns-like game. You're a time and space traveler, captain of your own ship. All of your decisions will impact the fate of your crew and your journey through the universe.",
		type: "Mobile Game",
		title: "Paths",
		gitlink: "https://github.com/Wakushi/paths",
		link: "https://paths-one.vercel.app/"
	},
	{
		img: kanga,
		desc: "Kanga is an image generative website based on AI, which goal is to make text-to-image more user-friendly with different features.",
		type: "Web App",
		title: "Kanga",
		gitlink: "none",
		link: "none"
	},
	{
		img: helixVault,
		desc: "Helix Vault is a web app that allows anyone to get information about any Helix holder's staked items, without the need for wallet connection.",
		type: "Web3 App",
		title: "Helix Vault",
		gitlink: "https://github.com/Wakushi/helix-vaults",
		link: "https://helix-vaults.vercel.app/"
	},
	{
		img: smartLottery,
		desc: "Solidity Lottery Smart Contract made using Foundry and Chainlink. This contracts allows anyone to buy a ticket to enter the lottery and a random winner selected every X minutes will win the pot. All this process is automated using the Chainlink VRF and Chainlink Automation.",
		type: "Smart Contract",
		title: "Smart lottery",
		gitlink: "https://github.com/Wakushi/foundry-smart-contract-lottery",
		link: "none"
	},
	{
		img: fundme,
		desc: "Solidity Smart Contract made using Foundry. It's a crowd funding contract that registers donators' addresses and allows the deployer to withdraw the funds.",
		type: "Smart Contract",
		title: "Crowd Funding",
		gitlink: "https://github.com/Wakushi/foundry-fund-me-f23",
		link: "none"
	},
	{
		img: weabove,
		desc: "This is an app that calls to a blockchain API and calculates staking rewards for the Web3 project 'WeAbove'",
		type: "Web3 App",
		title: "$GRV Calculator",
		gitlink: "https://github.com/Wakushi/weabove-gravite-calculator",
		link: "https://weabove-gravite-calculator.vercel.app/"
	},
	{
		img: blog,
		desc: "A blog for an english teacher made using Angular and Firebase to store student projects and courses, and allow the teacher to login to add or remove data.",
		type: "Web App",
		title: "Teacher Blog",
		gitlink: "https://github.com/Wakushi/english-teacher-blog-angular",
		link: "https://ms-rambault-class.vercel.app/"
	}
]
