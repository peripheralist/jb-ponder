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

const transportUrl = (prefix: string) =>
  http(`https://${prefix}.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`);

const jbTokensAddress = "0xa59e9f424901fb9dbd8913a9a32a081f9425bf36";

const jb721TiersHookDeployerAddress =
  "0xdefb489d101bf74bbf8f60eec6ff2f078c9d5206";

const deployErc20FactoryConfig = factory({
  address: jbTokensAddress,
  event: getAbiItem({ abi: JBTokensAbi, name: "DeployERC20" }),
  parameter: "token",
});

const hookDeployedFactoryConfig = factory({
  address: jb721TiersHookDeployerAddress,
  event: getAbiItem({ abi: JB721TiersHookDeployerAbi, name: "HookDeployed" }),
  parameter: "hook",
});

export default createConfig({
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
      address: "0x0b538a02610d7d3cc91ce2870f423e0a34d646ad",
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
      address: "0xb291844f213047eb9e1621ae555b1eae6700d553",
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
      address: "0xdb9644369c79c3633cde70d2df50d827d7dc7dbc",
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
    JBTokens: {
      abi: JBTokensAbi,
      address: jbTokensAddress,
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
    JB721TiersHookDeployer: {
      abi: JB721TiersHookDeployerAbi,
      address: jb721TiersHookDeployerAddress,
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
    JB721TiersHook: {
      abi: JB721TiersHookAbi,
      network: {
        ethereum: {
          address: hookDeployedFactoryConfig,
          startBlock: 21863215,
        },
        arbitrum: {
          address: hookDeployedFactoryConfig,
          startBlock: 306898627,
        },
        base: {
          address: hookDeployedFactoryConfig,
          startBlock: 26490148,
        },
        optimism: {
          address: hookDeployedFactoryConfig,
          startBlock: 132085433,
        },
      },
    },
    ERC20: {
      abi: erc20Abi,
      network: {
        ethereum: {
          address: deployErc20FactoryConfig,
          startBlock: 21863179,
        },
        arbitrum: {
          address: deployErc20FactoryConfig,
          startBlock: 306857750,
        },
        base: {
          address: deployErc20FactoryConfig,
          startBlock: 26485001,
        },
        optimism: {
          address: deployErc20FactoryConfig,
          startBlock: 132080297,
        },
      },
    },
    JBPermissions: {
      address: "0xf5ca295dc286a176e35ebb7833031fd95550eb14",
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
      address: "0xa5f8911d4cfd60a6697479f078409434424fe666",
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
      address: "0x027f1684c6d31066c3f2468117f2508e8134fdfc",
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
      address: "0x696c7e9b37d28edbefa3fce06e26041b7197c1a5",
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
