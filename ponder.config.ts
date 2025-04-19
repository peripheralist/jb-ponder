import { createConfig, factory } from "ponder";
import { erc20Abi, getAbiItem, http } from "viem";

import { Banny721TokenUriResolverAbi } from "./abis/Banny721TokenUriResolverAbi";
import { JB721TiersHookAbi } from "./abis/JB721TiersHookAbi";
import { JB721TiersHookDeployerAbi } from "./abis/JB721TiersHookDeployerAbi";
import { JBControllerAbi } from "./abis/JBControllerAbi";
import { JBMultiTerminalAbi } from "./abis/JBMultiTerminalAbi";
import { JBPermissionsAbi } from "./abis/JBPermissionsAbi";
import { JBProjectsAbi } from "./abis/JBProjectsAbi";
import { JBTokensAbi } from "./abis/JBTokensAbi";
import { REVDeployerAbi } from "./abis/REVDeployerAbi";
import { JBSuckersRegistryAbi } from "./abis/JBSuckersRegistryAbi";

const isTestnet = process.env.TESTNET === "true";

const transportUrl = (prefix: string) =>
  http(`https://${prefix}.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

const ADDRESS = {
  jb721TiersHookDeployer: "0xdefb489d101bf74bbf8f60eec6ff2f078c9d5206",
  jbTokens: "0xa59e9f424901fb9dbd8913a9a32a081f9425bf36",
  jbProjects: "0x0b538a02610d7d3cc91ce2870f423e0a34d646ad",
  jbController: "0xb291844f213047eb9e1621ae555b1eae6700d553",
  jbMultiTerminal: "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc",
  jbPermissions: "0xf5ca295dc286a176e35ebb7833031fd95550eb14",
  banny721TokenUriResolver: "0xa5f8911d4cfd60a6697479f078409434424fe666",
  revDeployer: "0x027f1684c6d31066c3f2468117f2508e8134fdfc",
  jbSuckersRegistry: "0x696c7e9b37d28edbefa3fce06e26041b7197c1a5",
} as const;

const deployErc20FactoryConfig = factory({
  address: ADDRESS.jbTokens,
  event: getAbiItem({ abi: JBTokensAbi, name: "DeployERC20" }),
  parameter: "token",
});

const hookDeployedFactoryConfig = factory({
  address: ADDRESS.jb721TiersHookDeployer,
  event: getAbiItem({ abi: JB721TiersHookDeployerAbi, name: "HookDeployed" }),
  parameter: "hook",
});

const JB721TiersHookDeployer = {
  mainnets: {
    abi: JB721TiersHookDeployerAbi,
    address: ADDRESS.jb721TiersHookDeployer,
    network: {
      ethereum: {
        startBlock: 21863981,
      },
      arbitrum: {
        startBlock: 306898627,
      },
      base: {
        startBlock: 26490148,
      },
      optimism: {
        startBlock: 132085433,
      },
    },
  },
  testnets: {
    abi: JB721TiersHookDeployerAbi,
    address: ADDRESS.jb721TiersHookDeployer,
    network: {
      ethereumSepolia: {
        startBlock: 7724790,
      },
      arbitrumSepolia: {
        startBlock: 124513119,
      },
      baseSepolia: {
        startBlock: 22000652,
      },
      optimismSepolia: {
        startBlock: 23983526,
      },
    },
  },
} as const;

const JBTokens = {
  mainnets: {
    abi: JBTokensAbi,
    address: ADDRESS.jbTokens,
    network: {
      ethereum: {
        startBlock: 21863179,
      },
      arbitrum: {
        startBlock: 306857750,
      },
      base: {
        startBlock: 26485001,
      },
      optimism: {
        startBlock: 132080297,
      },
    },
  },
  testNets: {
    abi: JBTokensAbi,
    address: ADDRESS.jbTokens,
    network: {
      ethereumSepolia: {
        startBlock: 7724144,
      },
      arbitrumSepolia: {
        startBlock: 306857750,
      },
      baseSepolia: {
        startBlock: 21993057,
      },
      optimismSepolia: {
        startBlock: 23975934,
      },
    },
  },
} as const;

export const mainnetConfig = createConfig({
  ordering: "multichain",
  networks: {
    ethereum: { chainId: 1, transport: transportUrl("eth-mainnet") },
    arbitrum: { chainId: 42161, transport: transportUrl("arb-mainnet") },
    base: { chainId: 8453, transport: transportUrl("base-mainnet") },
    optimism: { chainId: 10, transport: transportUrl("opt-mainnet") },
  },
  contracts: {
    JBProjects: {
      abi: JBProjectsAbi,
      address: ADDRESS.jbProjects,
      network: {
        ethereum: {
          startBlock: 21863142,
        },
        arbitrum: {
          startBlock: 306857479,
        },
        base: {
          startBlock: 26484953,
        },
        optimism: {
          startBlock: 132080242,
        },
      },
    },
    JBController: {
      abi: JBControllerAbi,
      address: ADDRESS.jbController,
      network: {
        ethereum: {
          startBlock: 21863191,
        },
        arbitrum: {
          startBlock: 306857842,
        },
        base: {
          startBlock: 26485017,
        },
        optimism: {
          startBlock: 132080314,
        },
      },
    },
    JBMultiTerminal: {
      abi: JBMultiTerminalAbi,
      address: ADDRESS.jbMultiTerminal,
      network: {
        ethereum: {
          startBlock: 21863215,
        },
        arbitrum: {
          startBlock: 306858028,
        },
        base: {
          startBlock: 26485049,
        },
        optimism: {
          startBlock: 132080347,
        },
      },
    },
    JB721TiersHookDeployer: JB721TiersHookDeployer.mainnets,
    JB721TiersHook: {
      abi: JB721TiersHookAbi,
      network: {
        ethereum: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.mainnets.network.ethereum?.startBlock,
        },
        arbitrum: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.mainnets.network.arbitrum?.startBlock,
        },
        base: {
          address: hookDeployedFactoryConfig,
          startBlock: JB721TiersHookDeployer.mainnets.network.base?.startBlock,
        },
        optimism: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.mainnets.network.optimism?.startBlock,
        },
      },
    },
    JBTokens: JBTokens.mainnets,
    ERC20: {
      abi: erc20Abi,
      network: {
        ethereum: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.mainnets.network.ethereum?.startBlock,
        },
        arbitrum: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.mainnets.network.arbitrum?.startBlock,
        },
        base: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.mainnets.network.base?.startBlock,
        },
        optimism: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.mainnets.network.optimism?.startBlock,
        },
      },
    },
    JBPermissions: {
      address: ADDRESS.jbPermissions,
      abi: JBPermissionsAbi,
      network: {
        ethereum: {
          startBlock: 21863136,
        },
        arbitrum: {
          startBlock: 306857433,
        },
        base: {
          startBlock: 26484945,
        },
        optimism: {
          startBlock: 132080233,
        },
      },
    },
    Banny721TokenUriResolver: {
      abi: Banny721TokenUriResolverAbi,
      address: ADDRESS.banny721TokenUriResolver,
      network: {
        ethereum: {
          startBlock: 22039034,
        },
        arbitrum: {
          startBlock: 315299005,
        },
        base: {
          startBlock: 27545253,
        },
        optimism: {
          startBlock: 133140537,
        },
      },
    },
    RevDeployer: {
      abi: REVDeployerAbi,
      address: ADDRESS.revDeployer,
      network: {
        ethereum: {
          startBlock: 21869094,
        },
        arbitrum: {
          startBlock: 307144912,
        },
        base: {
          startBlock: 26521040,
        },
        optimism: {
          startBlock: 132116325,
        },
      },
    },
    JBSuckersRegistry: {
      abi: JBSuckersRegistryAbi,
      address: ADDRESS.jbSuckersRegistry,
      network: {
        ethereum: {
          startBlock: 21863660,
        },
        arbitrum: {
          startBlock: 306881281,
        },
        base: {
          startBlock: 26487986,
        },
        optimism: {
          startBlock: 132083296,
        },
      },
    },
  },
});

export const testnetConfig = createConfig({
  networks: {
    ethereumSepolia: {
      chainId: 11155111,
      transport: transportUrl("eth-sepolia"),
    },
    arbitrumSepolia: {
      chainId: 421614,
      transport: transportUrl("arb-sepolia"),
    },
    baseSepolia: {
      chainId: 84532,
      transport: transportUrl("base-sepolia"),
    },
    optimismSepolia: {
      chainId: 11155420,
      transport: transportUrl("opt-sepolia"),
    },
  },
  contracts: {
    JBProjects: {
      abi: JBProjectsAbi,
      address: ADDRESS.jbProjects,
      network: {
        ethereumSepolia: {
          startBlock: 7724105,
        },
        arbitrumSepolia: {
          startBlock: 124457424,
        },
        baseSepolia: {
          startBlock: 21993006,
        },
        optimismSepolia: {
          startBlock: 23975881,
        },
      },
    },
    JBController: {
      abi: JBControllerAbi,
      address: ADDRESS.jbController,
      network: {
        ethereumSepolia: {
          startBlock: 7724149,
        },
        arbitrumSepolia: {
          startBlock: 124457787,
        },
        baseSepolia: {
          startBlock: 21993075,
        },
        optimismSepolia: {
          startBlock: 23975952,
        },
      },
    },
    JBMultiTerminal: {
      abi: JBMultiTerminalAbi,
      address: ADDRESS.jbMultiTerminal,
      network: {
        ethereumSepolia: {
          startBlock: 7724161,
        },
        arbitrumSepolia: {
          startBlock: 124457968,
        },
        baseSepolia: {
          startBlock: 21993109,
        },
        optimismSepolia: {
          startBlock: 23975987,
        },
      },
    },
    JB721TiersHookDeployer: JB721TiersHookDeployer.testnets,
    JB721TiersHook: {
      abi: JB721TiersHookAbi,
      network: {
        ethereumSepolia: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.testnets.network.ethereumSepolia?.startBlock,
        },
        arbitrumSepolia: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.testnets.network.arbitrumSepolia?.startBlock,
        },
        baseSepolia: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.testnets.network.baseSepolia?.startBlock,
        },
        optimismSepolia: {
          address: hookDeployedFactoryConfig,
          startBlock:
            JB721TiersHookDeployer.testnets.network.optimismSepolia?.startBlock,
        },
      },
    },
    JBTokens: JBTokens.testNets,
    ERC20: {
      abi: erc20Abi,
      network: {
        ethereumSepolia: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.testNets.network.ethereumSepolia?.startBlock,
        },
        arbitrumSepolia: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.testNets.network.arbitrumSepolia?.startBlock,
        },
        baseSepolia: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.testNets.network.baseSepolia?.startBlock,
        },
        optimismSepolia: {
          address: deployErc20FactoryConfig,
          startBlock: JBTokens.testNets.network.optimismSepolia?.startBlock,
        },
      },
    },
    JBPermissions: {
      address: ADDRESS.jbPermissions,
      abi: JBPermissionsAbi,
      network: {
        ethereumSepolia: {
          startBlock: 7724077,
        },
        arbitrumSepolia: {
          startBlock: 124457375,
        },
        baseSepolia: {
          startBlock: 21992998,
        },
        optimismSepolia: {
          startBlock: 23975872,
        },
      },
    },
    Banny721TokenUriResolver: {
      abi: Banny721TokenUriResolverAbi,
      address: ADDRESS.banny721TokenUriResolver,
      network: {
        ethereumSepolia: {
          startBlock: 7894609,
        },
        arbitrumSepolia: {
          startBlock: 132035055,
        },
        baseSepolia: {
          startBlock: 23055756,
        },
        optimismSepolia: {
          startBlock: 25038630,
        },
      },
    },
    RevDeployer: {
      abi: REVDeployerAbi,
      address: ADDRESS.revDeployer,
      network: {
        ethereumSepolia: {
          startBlock: 7729792,
        },
        arbitrumSepolia: {
          startBlock: 124752297,
        },
        baseSepolia: {
          startBlock: 22031613,
        },
        optimismSepolia: {
          startBlock: 24014488,
        },
      },
    },
    JBSuckersRegistry: {
      abi: JBSuckersRegistryAbi,
      address: ADDRESS.jbSuckersRegistry,
      network: {
        ethereumSepolia: {
          startBlock: 7724468,
        },
        arbitrumSepolia: {
          startBlock: 124497109,
        },
        baseSepolia: {
          startBlock: 21998497,
        },
        optimismSepolia: {
          startBlock: 23981375,
        },
      },
    },
  },
});

export default isTestnet ? testnetConfig : mainnetConfig;
