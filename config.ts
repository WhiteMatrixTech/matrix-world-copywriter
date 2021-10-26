import openseaLogo from '../images/logo/opensea.svg'
/* update test
 *  空行代表一个段落结束
 **/
export const copywriter = {
  global: {
    slogan: 'A 3D Programmable Multichain Metaverse',
    messages: {
      authPage: {
        accountRegisterSus: 'Registration succeeded!',
        accountRegisterFail: 'Registration failed, please try again.',
        sendEmailFail:
          'Failed to send the verification email, please try again.',
        emailNotValid: 'Please enter a valid email address.',
        codeNotValid: 'Please enter the verification code.',
        emailHasUsed: 'The email has already been used',
        emailIsBanned: 'This email has been banned',
      },
      preSalePage: {
        applySus: 'Application submitted!',
        applyFail: 'Application failed, please try again.',
        netWorkErr: 'Unexpected network error, please try again.',
        pleaseConnectWallet:
          'No connected wallet detected, please connect a wallet first.',
        haveNotSelectLand: `You haven't selected the Lands you want!`,
      },
      otherMsg: {
        pleaseInstallMetamask:
          'No Metamask detected, please install Metamask extension (https://metamask.io/)!',
        pleaseConnectMainNet:
          'Wrong network, please connect to Ethereum Mainnet.',
        pleaseConnectRinkeby: 'Wrong network, please connect to Rinkeby.',
        pleaseConnectFlow: 'Wrong network, please connect to Flow.',
        connectFailedTryAgain: 'Connection failed, please try again.',
        noWalletInfo: 'No wallet info detected!',
        copySuccess: 'Copied!',
      },
    },
    links: {
      whitePaperLink:
        'https://d2yoccx42eml7e.cloudfront.net/website/whitepaper.pdf',
      videoLink: 'https://d2yoccx42eml7e.cloudfront.net/videos/video.m4v',
    },
  },
  home: {
    introductionSection: {
      introduction1: {
        title: 'Multichain Metaverse',
        content: `Matrix is a distinctive virtual world that will support different blockchain infrastructures. Players can explore the world with different on-chain identities.`,
      },
      introduction2: {
        title: '3D Immersive DApps',
        content: `Creators can enrich and extend the world by building 3D immersive decentralized applications (DApps) that connect external services and applications. For example, players can visually trade and purchase NFTs through 3D DApps from OpenSea and other marketplaces.`,
      },
      introduction3: {
        title: 'Programable NFTs & Objects',
        content: `All in-game object and NFTs have their own lifecycles. Landowners can customize their behaviors, visual looking, and transformations via Turing-complete programs.`,
      },
      introduction4: {
        title: 'Create With Automation',
        content: `Importing various NFTs on the blockchain and create in-game building and constructions with automation tooling.`,
      },
      introduction5: {
        title: 'Gameplay & Entertainment',
        content: `Both public and user-created entertainment venues will be built in the virtual world, including 3D games, NFT galleries, and sports live centers. Players can enjoy their second life here.`,
      },
    },
    partnerSection: {
      title: 'OUR COLLABORATORS',
    },
    roadMapSection: {
      title: 'ROADMAP',
      content: [
        {
          time: '2021 Q4',
          title: 'Community Pre-sale',
          contentLines: [
            'Oct 15th: 1st round (up to 2000 Lands on Ethereum)',
            'Oct 26th: 2nd round (up to 5000 Lands on Flow)',
            'Nov 8th: 3rd round (up to 3000 Lands on Ethereum)',
          ],
        },
        {
          time: '2022 Q1',
          title: 'Multichain Identity System',
          contentLines: [
            'Support for Ethereum and Flow Accounts for Matrix Identity System',
            'Globalization and Targeting of Communities and Brands',
          ],
        },
        {
          time: '2022 Q2',
          title: 'Matrix World v1.0: A Traversable World',
          contentLines: [
            'Release of A Traversable World with Core 3D DApps',
            'Space Virtual Machine SDK and API Closed Beta Testing',
          ],
        },
        {
          time: '2022 Q3',
          title: 'Matrix World Builder and Developer API & SDK',
          contentLines: [
            'Builder API and SDK Release',
            'Coder API and SDK Release',
          ],
        },
        {
          time: '2022 Q4',
          title: 'Matrix World v2.0: A Programmable World',
          contentLines: [
            'Object and Scene Editor & Low-Code Creation Tool Release',
            'Partnership and Collaboration with Builder Organizations',
          ],
        },
        {
          time: '2023 Q1',
          title: 'Matrix World v3.0: A Infinite world',
          contentLines: [
            'Programmable NFT Support',
            'Global Creator Grant Event',
            'Project Origin: AI-Generated Metaverse Release',
          ],
        },
      ],
    },
    presaleSection: {
      title: 'Community Land Pre-sale',
      content: {
        introduction: [
          '<div class="homePresaleSectionIntro">The 2nd wave Matrix Land pre-sale of up to 5000 Lands starts on <span class="blueAndBold">Oct 26th</span>.</div>',
          `<div class="homePresaleSectionIntro">Individual applicants can apply for up to <span class="blueAndBold">10 Lands</span>, while organizations can apply for up to <span class="blueAndBold">108 Lands</span>.</div>`,
          '<div class="homePresaleSectionIntro">Please keep an eye on our website for further pre-sale status updates.<div>',
          `<div class="homePresaleSectionIntro"><br /><i style="font-weight: 800">Note</i>: For Ethereum users, you can view your claimed Lands on our <img width="20" src=${openseaLogo} /> <a class="blueAndBold" target="_blank" href="https://opensea.io/collection/matrixworld-landvoucher" rel="noreferrer">OpenSea collection</a> page.<div>`
        ],
        steps: {
          title: 'Steps of Pre-sale Application:',
          content: [
            '<div class="homePresaleSectionStepLine">Click the "APPLY NOW" button below, fill in the form, and submit your application.</div>',
            '<div class="homePresaleSectionStepLine">We will review all the submissions and notify the eligible applicants of the approval message through email and notifications on the Matrix website.</div>',
            '<div class="homePresaleSectionStepLine">Eligible applicants who receive the CLAIM notification message are eligible to purchase the allocated land within <span class="blueAndBold">72 hours</span>. If the purchase has not been made within 72 hours, the qualification will be invalidated.</div>',
            '<div class="homePresaleSectionStepLine">Once the applicants finish the purchase, they will receive a tradable NFT voucher for the corresponding Land. Owners of the Land NFT voucher can later claim the Land on the <a href="/claim" class="blueAndBold" target="_self">Claim Page</a></div>',
          ],
        },
      },
    },
    waveSection: {
      firstWave: {
        title: '1st WAVE',
        subTitle: `<span class="white">2000 Lands on </span>Ethereum`
      },
      secondWave: {
        title: '2nd WAVE',
        subTitle: `<span class="white">5000 Lands on </span> Flow`,
        desc: `<div>1. The main drop time on Flow will be at <span class="blueAndBold">08:00 AM, on OCT 26th PDT</span>.<div>
        <div>2. The <span class="blueAndBold">purchasing price</span>  of each Land is 60 FLOW. Please prepare sufficient funds in advance.</div><div>3. Please <span class="blueAndBold">note that</span> your Land Vouchers in the whitelist are <span class="blueAndBold">not guaranteed</span>, we are applying <span class="blueAndBold">First Come Serve</span> rules for the second wave due to the massive number of qualified applicants on Flow.</div>
        `
      },
      thirdWave: {
        title: '3rd WAVE',
        subTitle: `<span class="white">3000 Lands on </span> Ethereum`
      }
    }
  },
  earlyAccess: {
    referralContest: {
      title: 'Referral Contest',
      content: `<span class='white'>Dear Matrixers!</span><div class='white'> We're thankful for your tremendous support for the REFERRAL CONTEST activity,</div>

    1. Registrations for the REFERRAL CONTEST activity are closed on Oct 18th at 00:00 PDT.

    2. The result of this activity will be announced in 10 workdays, Land NFTs will be rewarded to the winners after the pre-sale is finished.

    3. We're sorry to find that there are a lot of fake accounts registered using bots, and for a fair evaluation, our team is processing the results, checking all the registered accounts carefully, and filtering the fake accounts.

    `,
    },
    NFTAirdrop: {
      title: 'NFT Airdrop',
      content: `In order to make the Matrix world a better place, we are intended to synthesize the world with multi-elements. Therefore we will offer special NFT airdrops in the Matrix world.Please note that these specially made souvenirs NFTs are <span class="hightLight">NOT LANDS</span> that would be offered in the 'Pre-sale Activity' and 'Referral Contest'.`,
      section: {
        section1: {
          title: 'Airdrop for Ethereum Users',
          content: `We will offer free NFT airdrops to the owner of the below NFT collections who participated in the early access. The owner of NFTs listed below will will be airdropped one NFT for each owned NFT collection. <span class="hightLight">The snapshot will be taken on Oct 19th 00:00 PDT.</span>

          Note that multiple NFTs of the same collection only count once. For instance, If Sam has 3 Cryptopunks, 2 Meetbits, and 5 Rivermen, he will get 3 airdropped NFTs.`,
          applicationList: [
            {
              name: 'Loot',
              desc: 'Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.',
              link: 'https://opensea.io/collection/lootproject',
            },
            {
              name: 'CryptoPunks',
              desc: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations for the ERC-721 standard. They have been featured in places like The New York Times, Christie’s of London, Art|Basel Miami, and The PBS NewsHour.',
              link: 'https://opensea.io/collection/cryptopunks',
            },
            {
              name: 'Decentraland',
              desc: "Decentraland is an Ethereum blockchain-powered virtual world, developed and owned by its users, who can create, experience, and monetize content and applications. Join a growing community of virtual world inhabitants who are building the world's largest alternate reality economy on the blockchain. In this store, you can buy and sell land assets in MANA, DCL's native currency.",
              link: 'https://opensea.io/collection/decentraland',
            },
            {
              name: 'Meebits',
              desc: 'The Meebits are 20,000 unique 3D voxel characters, created by a custom generative algorithm, then registered on the Ethereum blockchain.',
              link: 'https://opensea.io/collection/meebits',
            },
            {
              name: 'RiverMen',
              desc: 'Rivermen is a gamified NFT collection based on blockchain technology, created by the Cthuwork&NA team using elements from the voxel version of the “Along the River During Qingming Festival”. The voxel version of “Along the River During Qingming Festival” is a 3D artwork reinterpreting this long scroll, as one of the top ten famous Chinese paintings. The RIVER refers to the "Bian River" in this ancient painting scroll. Each person in this scene has a unique identity. The Rivermen are the good neighbors and cool folks living in the "Bianriverse". They are not ancient nor modern, but aboriginal people of the "Bianriverse", which is a metaverse based on "Along the River During the Qingming Festival". They will spend some quality time together in the Bianriverse.',
              link: 'https://opensea.io/collection/rivermen',
            },
            {
              name: 'The Sandbox Land',
              desc: 'The Sandbox is a community-driven platform where creators can monetize voxel assets and gaming experiences on the blockchain. The Sandbox metaverse comprises a map made up of 166,464 LANDS. LAND owners can host contests and events, stake SAND to earn and customize assets, monetize assets and experiences, vote in the metaverse governance, play games that you or others create, and more! Trade the collection and keep your eyes peeled for future drops.',
              link: 'https://opensea.io/collection/sandbox',
            },
            {
              name: 'Bored APe Yacht Club',
              desc: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. Visit www.BoredApeYachtClub.com for more details.',
              link: 'https://opensea.io/collection/boredapeyachtclub',
            },
            {
              name: 'CryptoVoxels',
              desc: 'A virtual world on the Ethereum blockchain. Build, develop, and sell property on the blocks and streets of Cryptovoxels. Users own the land and assets, with ownership and trading history recorded permanently on the blockchain. Trade land NFTs right here on OpenSea, and keep track of the Cryptovoxels team on Twitter for news on the latest drops and developments.',
              link: 'https://opensea.io/collection/cryptovoxels',
            },
          ],
        },
        section2: {
          title: 'Airdrop for Flow Users',
          content:
            'On Oct 15, Matrix world will offer free NFT airdrops for lucky participants in the Flow Fest Activity. Chosen individuals will be able to redeem one Mystery Box. Once users open the Mystery Box, they will receive their NFTs directly to their Blocto wallet or any FCL compatible non-custodial wallet.',
        },
        section3: {
          title:
            'Airdrop for ChainIDE Users<span style="color:#FF5858"> (Terminated)</span>',
          content: `<p class='deleteLine'>ChainIDE users who registered before October 18th and created a project with ChainIDE (You will have to ensure that the email address you use in Matrix registration is the same as the ChainIDE account’s email).

          Users who want to get NFT airdrops must register on the Matrix website with the same wallet holding listed NFTs before the pre-sale starts. The snapshot will be taken right after the early access closes.

          Thank you for your participation and support! We hope everyone has a great time :D</p>`,
        },
        section4: {
          title: `<span style="color:#FF5858;font-size:20px;font-style:italic">Notification of ChainIDE Airdrop Event Termination</span>`,
          content: `<p style="color:#FF5858">Dear Matrixers! Matrix team appreciates your great response to the "NFT AIRDROP for ChainIDE users" activity. Unfortunately, it was discovered that there are widespread abuses of creating a massive number of fraudulent accounts on GitHub to take advantage of the NFT airdrop. The Github team found this issue and notified our partner, the ChainIDE team, about the bad influence of bots-created garbage accounts.

          Therefore, after hours of research and discussion, we have decided to close this activity. <span style="color:#e5ecf4 ">Members who already registered and created a project before Oct 12th, 01:00 PM PDT will still be rewarded with special NFTs related to Matrix World accessories.</span>

          Thanks again, and good luck!</p>`,
        },
      },
    },
  },
  faqs: [
    {
      questionType: 'Matrix World Overview',
      questionList: [
        {
          question: 'What is Matrix World?',
          answer: `Matrix World is an open world that enables users to build 3D immersive applications on top of several blockchains. In Matrix World, users can take advantage of traditional 3D open-world features such as building 3D architectures, hosting virtual meetings, exhibiting NFTs, and more advanced functionality such as creating their own 3D decentralized applications (DApps) using Matrix's built-in computational resources.`,
        },
        {
          question: 'When will Matrix World release?',
          answer: `Matrix World is currently in the pre-alpha version. We are now constructing public tools，services, and buildings such as universities and headquarters for famous companies. This will make our metaverse world energetic and provide fully functional support for the community. We set up joint laboratories with different partners and help them get connected to the decentralized world.

          We plan to open up alpha testing of Matrix World to the community in 6 months, with more features and creator-friendly metaverse environment betas coming in 2023.

          In 2022 Q2, we will open the alpha version of Matrix World, with a fundamental fast build toolbox and low code development platform to help the users build the metaverse world. We will also present public service buildings for practical use, such as education, tourism, and social connections. The beta version is coming in 2023, and we will do the official opening in early 2024.`,
        },
        {
          question:
            'Which platform should I choose to participate in Matrix World?',
          answer: `Currently, we don't support mobile devices. Users can run Matrix World from a PC or Mac running Chrome or Firefox. While it may be technically possible that other browsers might work, to ensure optimal performance, we highly recommend Firebox or Chrome.`,
        },
        {
          question:
            'Why should I participate in Matrix World? What are some highlights in Matrix World?',
          answer: `1. Matrix World is the first open virtual world project simultaneously running on different blockchain networks. The system now supports Ethereum and Flow, and we plan to include more blockchain networks as its persistent and consensus layer.

          2. The Matrix team has extensive experience with blockchain games, middleware, and the metaverse. Cell Evolution won an award worth millions successfully helped us establish closer connections with the world's first developer ecosystems of the blockchain games. We collaborate with ChainIDE, a cloud-based integrated development environment that provides online services in more than 165 countries. The Metaverse Bootcamp that we co-hosted incubated and escorted over 30 blockchain games and metaverse projects.

          3. We feel proud of the global developer ecosystem and partnership we have developed. Our official partnership with the Flow team makes Matrix World the first metaverse project in the Flow ecosystem. Furthermore, the Flow team plan to build a Flow headquarter in Matrix World. Flow blockchain projects like CryptoKitties and NBA Top Shots will collaborate with Matrix World gradually.`,
        },
      ],
    },
    {
      questionType: 'Matrix Land',
      questionList: [
        {
          question: 'What is Matrix Land?',
          answer: `Matrix Land is the smallest territorial unit in Matrix World with finite computation and storage resources. A Land is also represented on several blockchains as a tradable NFT token. For instance, it will be an ERC-721 token on Ethereum, whereas on Flow will be an on-chain Flow resource.`,
        },
        {
          question: 'What is Land Voucher?',
          answer: `A Land Voucher is a certificate Non-Fungible Token (NFT) that proves your ownership of a square of Lands in the early stages of Matrix World. It can be freely traded in marketplaces in order to transfer ownership.`,
        },
        {
          question: 'How large is a tile of Matrix Land?',
          answer: `A Land is 30m x 30m, or 99ft x 99ft, and there will be a height limitation which we are still deciding. However, if you are our partners or community members, you can apply extra height for special usages.`,
        },
        {
          question: 'Can I merge or split Matrix Land?',
          answer: `If owners buy more than one Land, they can split it and sell it in parts, When a group of Lands shares the same owner, the owner can choose to merge the Lands into a Space for larger construction and more complicated application development. The computational resources and storage of the Lands will get merged too.`,
        },
        {
          question: 'What can Land owners do?',
          answer: `The Matrix Lands are tradable and transferable via blockchain networks, and their owners retain complete control over the creations on their Lands in Matrix World. Users can take advantage of traditional 3D open-world features such as building 3D architectures, hosting virtual meetings, exhibiting NFTs, and more advanced functionality such as creating their own 3D decentralized Applications (DApps) using Matrix's built-in computational resources. These DApps include 3D games and 3D marketplace, among others.`,
        },
        {
          question: 'Can I resell my Land in the pre-alpha phase?',
          answer: `Yes. On both blockchain networks, Ethereum and Flow, Matrix Lands are tradable and transferable even during the pre-alpha phase.`,
        },
      ],
    },
    {
      questionType: 'Community Pre-sale',
      questionList: [
        {
          question: 'What is the community Land pre-sale?',
          answer: `The community Land pre-sale is a special event in which up to 5,000 Matrix Lands on Ethereum and 5,000 Matrix Lands on Flow ecosystem will be made available for early members to purchase.

          The purpose of this sale is to gather the early community for Matrix World. We want to gather the power from the community to help us accelerate the whole process. Coders, artists, scientists, geeks, and metaverse builders are welcome to join us. The sale will be a case-by-case application. Candidates will have to fill out a form explaining your plan on your early access Lands. Due to the limited supply, you might not be able to get all the Lands and Spaces you requested on your form.`,
        },
        {
          question: 'How will the community pre-sale work?',
          answer: `To be eligible to join in Matrix World community pre-sale, you have to fill in the application form. If you are selected to be the first group of Matrix World builders, you will be added to Matrix's whitelist and receive an email to inform you that you are eligible to buy Lands on Matrix World's website.

          There will be several rounds of selections, and each qualified applicant will have 72 hours to finish the purchase in order to get your Land Vouchers. This is to avoid gas war and offer more flexibility to finish the transactions.

          The form will contain some contact info and features a couple of questions designed to show us your understanding of metaverse and the blockchain world.

          The application will start from Oct 8th to Nov 8th at 00:00 Pacific Time. We will evaluate all the submissions and give offers in several rounds. The earlier applications that come in are likely to get earlier offers.`,
        },
        {
          question: 'How much will pre-sale Land cost?',
          answer: `Each Land’s price on Ethereum is 0.2 Ether. And for Flow users, the price is the same, but the payment is via FUSD or FLOW at the community pre-sale stage.`,
        },
        {
          question:
            'What are some activities I can participate in pre-sale period?',
          answer: `Referral Contest: The top 200 players with the most referred registrations will be rewarded as one pre-released Land in the Matrix World.

          NFT Airdrop: We will offer free NFT airdrops to owners of special NFT collections who participated in the early access (both Ethereum and Flow). You can check the special NFT collection list on the Matrix NFT airdrop event webpage (<a href="https://matrixworld.org/airdrop"> https://matrixworld.org/airdrop</a>).

          Airdrop for ChainIDE users: We will offer free NFT airdrops to ChainIDE users who registered before Oct 18th and created a project with ChainIDE.`,
        },
        {
          question: 'How to get NFT Airdrop in early access?',
          answer: `In order to make the Matrix World a better place, we are intended to synthesize the world with multi-elements. Therefore we will offer special NFT airdrops for each player in the Matrix World. We will offer free NFT airdrops to the owner of several NFT collections who participated in the early access. Please check the detailed NFT collection list on the the Matrix NFT airdrop event webpage (<a href="https://matrixworld.org/airdrop">https://matrixworld.org/airdrop</a>).`,
        },
        {
          question: 'Which wallet should I use?',
          answer: `On Ethereum, we support Metamask and all other wallets integrated with web3.js. On Flow, we support Blocto. If your application is approved, you will be emailed with clear instructions on how to pay for your Land.`,
        },
      ],
    },
    {
      questionType: 'Matrix Essentials',
      questionList: [
        {
          question: 'Which blockchain ecosystems will Matrix support?',
          answer: `One significant feature of Matrix World is multichain connectivity. Matrix World system will maintain identities across various blockchains. At the moment, we plan to support Ethereum and Flow, but
we propose to integrate additional EVM-based and layer-2 blockchains in the near future. Creators can also connect Matrix Objects to
external smart contracts running on multiple blockchain networks. For instance, a creator can create a 3D Uniswap ATM by crafting its
appearance and defining the function to invoke Uniswap's swap function in Ethereum. Similarly, a creator can also construct a 3D video
gallery featuring Flow's NBA Topshot moments.`,
        },
        {
          question: 'What is Space Virtual Machine?',
          answer: `Everything inside Matrix World is programmable. All the objects in a Land are managed by a canonical virtual machine called Space Virtual Machine (SVM), which has its own set of characteristics, 3D appearance, and lifecycle. Meanwhile, users can define custom attributes and implement custom methods to modify these Matrix Objects' behavior. A complex 3D application is formed by a collection of several programmed/scripted Matrix Objects that can interact with each other. Authorized creators can simply program the actions of Objects using the Matrix Object and Scene Editor.`,
        },
        {
          question: 'What is Matrix Object?',
          answer: `Matrix Object is the collective name of all the 3D programmable objects in the Matrix World. These objects' appearance, actions, and lifecycles are managed by the Space Virtual Machine (SVM). Matrix object is hierarchical, which means it can have nested child Objects attached to it.`,
        },
        {
          question: 'How will Matrix support DApps?',
          answer: `Matrix World is a 3D DApp platform. Matrix network consists of a number of Space Virtual Machine (SVM), each of which is responsible for running a Scene on a specific Land/Space that offers various functionalities. Creators can make a 3D application solely on one SVM and create cross-SVM or multiscene applications. Matrix World will provide creators with development and automation tools to facilitate scene and DApp development. We hope that in the future, thousands of 3D applications will operate concurrently in Matrix World.`,
        },
      ],
    },
    {
      questionType: 'Others',
      questionList: [
        {
          question: `Where is the Matrix Team's HQ based?`,
          answer: `Our headquarter is based in Vancouver, BC. We also have offices and remote staff operating from all over the world.`,
        },
        {
          question: 'Who is the Matrix Team?',
          answer: `The Matrix Team was founded in Vancouver in 2017 and now grows up to more than fifty staff worldwide. The Matrix Team has deep experience in the research and development of blockchain systems.`,
        },
        {
          question:
            'Where can I contact the Matrix Team if I have further questions?',
          answer: `Join our Discord or email us to ask any questions you want, and We will answer as soon as possible. Also, Our community members will help too.`,
        },
        {
          question: `What is the Matrix Team's determination?`,
          answer: `We are long-term builders in blockchain and a decentralized world. We hope we can help more developers worldwide get into the metaverse and grow up with the community.

          IN METAVERSE, WE BUIDL!`,
        },
      ],
    },
  ],
  preSale: {
    steps: {
      step1: {
        title: 'Choose Blockchain',
      },
      step2: {
        title: 'Basic Info',
      },
      step3: {
        title: 'Choose Land(s)',
      },
    },
    chooseBlockchain: {
      ethereum: {
        title: 'Ethereum Lands',
        sign: 'Sign in with ',
        apply: 'APPLY NOW',
      },
      flow: {
        title: 'Flow Lands',
        sign: 'Sign in with ',
        apply: 'APPLY NOW',
      },
    },
    basicInfo: {
      Individual: {
        nationality: {
          title: 'What is your nationality?',
          placeholder: 'please select your nationality',
        },
        age: {
          title: 'How old are you?',
          placeholder: '(0~3 numbers)',
        },
        experience: {
          title: 'How long have you been in the blockchain world?',
          questionData: [
            {
              name: 'Less than 1 year',
              value: 'Less than 1 year',
            },
            {
              name: '1-2 years',
              value: '1-2 years',
            },
            {
              name: '2-3 years',
              value: '2-3 years',
            },
            {
              name: 'More than 3 years',
              value: 'More than 3 years',
            },
          ],
          placeholder:
            'please select how long have you been in the blockchain world',
        },
        metaverseRole: {
          title: 'What role do you play in the metaverse?',
          questionData: [
            {
              name: 'Developer',
              value: 'Developer',
            },
            {
              name: 'Artist',
              value: 'Artist',
            },
            {
              name: 'Builder',
              value: 'Builder',
            },
            {
              name: 'Community supporter',
              value: 'Community supporter',
            },
            {
              name: 'Other roles',
              value: 'Other roles',
            },
          ],
          placeholder: 'please select your role in the metaverse',
        },
        contributions: {
          title: 'Your contributions to blockchain or metaverse projects?',
          placeholder: '0~500 characters',
        },
        buildPlan: {
          title: 'What do you plan to build in Matrix World?',
          placeholder: '0~500 characters',
        },
        discordId: {
          title: 'Your Discord ID (optional)',
          placeholder: 'Enter your Discord ID',
        },
      },
      Organization: {
        members: {
          title: 'The number of community members in your organization',
          questionData: [
            {
              name: 'Less than 50',
              value: 'Less than 50',
            },
            {
              name: '50-200',
              value: '50-200',
            },
            {
              name: '200-500',
              value: '200-500',
            },
            {
              name: '500+',
              value: '500+',
            },
          ],
          placeholder:
            'please select the number of community members in your organization',
        },
        majority: {
          title: 'The majority of your organization(s) are',
          placeholder: 'please select the majority of your organization(s)',
          questionData: [
            {
              name: 'Fans of metaverse',
              value: 'Fans of metaverse',
            },
            {
              name: 'Geeks and coders',
              value: 'Geeks and coders',
            },
            {
              name: 'Crypto artists',
              value: 'Crypto artists',
            },
            {
              name: 'Crypto investors',
              value: 'Crypto investors',
            },
            {
              name: 'Others',
              value: 'Others',
            },
          ],
        },
        organizationRunTime: {
          title: 'Your organization has been running for',
          placeholder: 'please select your organization run time',
          questionData: [
            {
              name: 'Less than 1 year',
              value: 'Less than 1 year',
            },
            {
              name: '1-3',
              value: '1-3',
            },
            {
              name: '3+',
              value: '3+',
            },
          ],
        },
        contributions: {
          title:
            'Describe your contributions to blockchain or metaverse projects',
          placeholder: '0~500 characters',
        },
        buildPlan: {
          title: 'What does your organization plan to build in Matrix World?',
          placeholder: '0~500 characters',
        },
        discordId: {
          title: 'Your Discord ID or website',
          placeholder: 'Enter your Discord ID or website',
        },
        contactEmail: {
          title: `Your organization's official contact email address`,
          placeholder:
            "Enter your organization's official contact email address",
        },
      },
    },
    chooseLands: {
      title: 'Select the quantity of Land(s) you want to apply for',
      quantitySelected: 'Quantity selected',
    },
    successPage: {
      title: 'Thank you!',
      subTitle:
        'Your application has been submitted. We’ve sent a confirmation email to you. Please check your mailbox for further information and updates.',
      buttons: {
        title: 'BACK HOME',
      },
      didnotReceiveIt: 'Didn’t receive it?',
    },
  },
  claim: {
    noVoucherContent: `The main drop on Flow will be at 08:00 AM PDT (15:00 PM UCT) on October 26th.`,
    purchase: {
      tip: `Your Land Voucher(s) to Claim`,
      expire: `Expire in`,
      claim: `CLAIM`,
      expireTip: `Your Land Voucher(s) have expired.
      For further info, keep an eye on the mailbox and the notification
      center.
      Thanks for your support.`,
    },
    success: {
      content: `You've successfully submitted the transaction!
      Please wait for a few moments and stay tuned for updates via email and the notification center.`,
      button: `VIEW IN MAP`
    },
    tradingIn: {
      content: `Waiting for the transaction to complete.
      We will inform you after the transaction is completed,
      please keep an eye on the notification center.`
    }
  }
}
