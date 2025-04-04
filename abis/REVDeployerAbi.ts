export const REVDeployerAbi = [
  {
    inputs: [
      {
        internalType: "contract IJBController",
        name: "controller",
        type: "address",
      },
      {
        internalType: "contract IJBSuckerRegistry",
        name: "suckerRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeRevnetId",
        type: "uint256",
      },
      {
        internalType: "contract IJB721TiersHookDeployer",
        name: "hookDeployer",
        type: "address",
      },
      {
        internalType: "contract CTPublisher",
        name: "publisher",
        type: "address",
      },
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CASH_OUT_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONTROLLER",
    outputs: [
      {
        internalType: "contract IJBController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DIRECTORY",
    outputs: [
      {
        internalType: "contract IJBDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE_REVNET_ID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "HOOK_DEPLOYER",
    outputs: [
      {
        internalType: "contract IJB721TiersHookDeployer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMISSIONS",
    outputs: [
      {
        internalType: "contract IJBPermissions",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROJECTS",
    outputs: [
      {
        internalType: "contract IJBProjects",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PUBLISHER",
    outputs: [
      {
        internalType: "contract CTPublisher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SUCKER_REGISTRY",
    outputs: [
      {
        internalType: "contract IJBSuckerRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rulesetId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cashOutCount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "reclaimedAmount",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "forwardedAmount",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "cashOutTaxRate",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "hookMetadata",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "cashOutMetadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBAfterCashOutRecordedContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "afterCashOutRecordedWith",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stageId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "amountToAutoIssue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stageId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "autoIssueFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rulesetId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cashOutCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "surplus",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "useTotalSurplus",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "cashOutTaxRate",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBBeforeCashOutRecordedContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "beforeCashOutRecordedWith",
    outputs: [
      {
        internalType: "uint256",
        name: "cashOutTaxRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cashOutCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IJBCashOutHook",
            name: "hook",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBCashOutHookSpecification[]",
        name: "hookSpecifications",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "terminal",
            type: "address",
          },
          {
            internalType: "address",
            name: "payer",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct JBTokenAmount",
            name: "amount",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rulesetId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reservedPercent",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBBeforePayRecordedContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "beforePayRecordedWith",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "contract IJBPayHook",
            name: "hook",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct JBPayHookSpecification[]",
        name: "hookSpecifications",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
    ],
    name: "buybackHookOf",
    outputs: [
      {
        internalType: "contract IJBRulesetDataHook",
        name: "buybackHook",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
    ],
    name: "cashOutDelayOf",
    outputs: [
      {
        internalType: "uint256",
        name: "cashOutDelay",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "ticker",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
              },
            ],
            internalType: "struct REVDescription",
            name: "description",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "baseCurrency",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "splitOperator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint48",
                name: "startsAtOrAfter",
                type: "uint48",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "chainId",
                    type: "uint32",
                  },
                  {
                    internalType: "uint104",
                    name: "count",
                    type: "uint104",
                  },
                  {
                    internalType: "address",
                    name: "beneficiary",
                    type: "address",
                  },
                ],
                internalType: "struct REVAutoIssuance[]",
                name: "autoIssuances",
                type: "tuple[]",
              },
              {
                internalType: "uint16",
                name: "splitPercent",
                type: "uint16",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "percent",
                    type: "uint32",
                  },
                  {
                    internalType: "uint64",
                    name: "projectId",
                    type: "uint64",
                  },
                  {
                    internalType: "address payable",
                    name: "beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "preferAddToBalance",
                    type: "bool",
                  },
                  {
                    internalType: "uint48",
                    name: "lockedUntil",
                    type: "uint48",
                  },
                  {
                    internalType: "contract IJBSplitHook",
                    name: "hook",
                    type: "address",
                  },
                ],
                internalType: "struct JBSplit[]",
                name: "splits",
                type: "tuple[]",
              },
              {
                internalType: "uint112",
                name: "initialIssuance",
                type: "uint112",
              },
              {
                internalType: "uint32",
                name: "issuanceCutFrequency",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "issuanceCutPercent",
                type: "uint32",
              },
              {
                internalType: "uint16",
                name: "cashOutTaxRate",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "extraMetadata",
                type: "uint16",
              },
            ],
            internalType: "struct REVStageConfig[]",
            name: "stageConfigurations",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "contract IJBPayoutTerminal",
                name: "terminal",
                type: "address",
              },
            ],
            internalType: "struct REVLoanSource[]",
            name: "loanSources",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "loans",
            type: "address",
          },
        ],
        internalType: "struct REVConfig",
        name: "configuration",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IJBTerminal",
            name: "terminal",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
            ],
            internalType: "struct JBAccountingContext[]",
            name: "accountingContextsToAccept",
            type: "tuple[]",
          },
        ],
        internalType: "struct JBTerminalConfig[]",
        name: "terminalConfigurations",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "contract IJBBuybackHook",
            name: "hook",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
              },
              {
                internalType: "uint32",
                name: "twapWindow",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "twapSlippageTolerance",
                type: "uint32",
              },
            ],
            internalType: "struct REVBuybackPoolConfig[]",
            name: "poolConfigurations",
            type: "tuple[]",
          },
        ],
        internalType: "struct REVBuybackHookConfig",
        name: "buybackHookConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IJBSuckerDeployer",
                name: "deployer",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "localToken",
                    type: "address",
                  },
                  {
                    internalType: "uint32",
                    name: "minGas",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "remoteToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "minBridgeAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct JBTokenMapping[]",
                name: "mappings",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSuckerDeployerConfig[]",
            name: "deployerConfigurations",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        internalType: "struct REVSuckerDeploymentConfig",
        name: "suckerDeploymentConfiguration",
        type: "tuple",
      },
    ],
    name: "deployFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IJBSuckerDeployer",
                name: "deployer",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "localToken",
                    type: "address",
                  },
                  {
                    internalType: "uint32",
                    name: "minGas",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "remoteToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "minBridgeAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct JBTokenMapping[]",
                name: "mappings",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSuckerDeployerConfig[]",
            name: "deployerConfigurations",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        internalType: "struct REVSuckerDeploymentConfig",
        name: "suckerDeploymentConfiguration",
        type: "tuple",
      },
    ],
    name: "deploySuckersFor",
    outputs: [
      {
        internalType: "address[]",
        name: "suckers",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "ticker",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
              },
            ],
            internalType: "struct REVDescription",
            name: "description",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "baseCurrency",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "splitOperator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint48",
                name: "startsAtOrAfter",
                type: "uint48",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "chainId",
                    type: "uint32",
                  },
                  {
                    internalType: "uint104",
                    name: "count",
                    type: "uint104",
                  },
                  {
                    internalType: "address",
                    name: "beneficiary",
                    type: "address",
                  },
                ],
                internalType: "struct REVAutoIssuance[]",
                name: "autoIssuances",
                type: "tuple[]",
              },
              {
                internalType: "uint16",
                name: "splitPercent",
                type: "uint16",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "percent",
                    type: "uint32",
                  },
                  {
                    internalType: "uint64",
                    name: "projectId",
                    type: "uint64",
                  },
                  {
                    internalType: "address payable",
                    name: "beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "preferAddToBalance",
                    type: "bool",
                  },
                  {
                    internalType: "uint48",
                    name: "lockedUntil",
                    type: "uint48",
                  },
                  {
                    internalType: "contract IJBSplitHook",
                    name: "hook",
                    type: "address",
                  },
                ],
                internalType: "struct JBSplit[]",
                name: "splits",
                type: "tuple[]",
              },
              {
                internalType: "uint112",
                name: "initialIssuance",
                type: "uint112",
              },
              {
                internalType: "uint32",
                name: "issuanceCutFrequency",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "issuanceCutPercent",
                type: "uint32",
              },
              {
                internalType: "uint16",
                name: "cashOutTaxRate",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "extraMetadata",
                type: "uint16",
              },
            ],
            internalType: "struct REVStageConfig[]",
            name: "stageConfigurations",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "contract IJBPayoutTerminal",
                name: "terminal",
                type: "address",
              },
            ],
            internalType: "struct REVLoanSource[]",
            name: "loanSources",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "loans",
            type: "address",
          },
        ],
        internalType: "struct REVConfig",
        name: "configuration",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IJBTerminal",
            name: "terminal",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
            ],
            internalType: "struct JBAccountingContext[]",
            name: "accountingContextsToAccept",
            type: "tuple[]",
          },
        ],
        internalType: "struct JBTerminalConfig[]",
        name: "terminalConfigurations",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "contract IJBBuybackHook",
            name: "hook",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
              },
              {
                internalType: "uint32",
                name: "twapWindow",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "twapSlippageTolerance",
                type: "uint32",
              },
            ],
            internalType: "struct REVBuybackPoolConfig[]",
            name: "poolConfigurations",
            type: "tuple[]",
          },
        ],
        internalType: "struct REVBuybackHookConfig",
        name: "buybackHookConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IJBSuckerDeployer",
                name: "deployer",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "localToken",
                    type: "address",
                  },
                  {
                    internalType: "uint32",
                    name: "minGas",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "remoteToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "minBridgeAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct JBTokenMapping[]",
                name: "mappings",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSuckerDeployerConfig[]",
            name: "deployerConfigurations",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        internalType: "struct REVSuckerDeploymentConfig",
        name: "suckerDeploymentConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                internalType: "string",
                name: "baseUri",
                type: "string",
              },
              {
                internalType: "contract IJB721TokenUriResolver",
                name: "tokenUriResolver",
                type: "address",
              },
              {
                internalType: "string",
                name: "contractUri",
                type: "string",
              },
              {
                components: [
                  {
                    components: [
                      {
                        internalType: "uint104",
                        name: "price",
                        type: "uint104",
                      },
                      {
                        internalType: "uint32",
                        name: "initialSupply",
                        type: "uint32",
                      },
                      {
                        internalType: "uint32",
                        name: "votingUnits",
                        type: "uint32",
                      },
                      {
                        internalType: "uint16",
                        name: "reserveFrequency",
                        type: "uint16",
                      },
                      {
                        internalType: "address",
                        name: "reserveBeneficiary",
                        type: "address",
                      },
                      {
                        internalType: "bytes32",
                        name: "encodedIPFSUri",
                        type: "bytes32",
                      },
                      {
                        internalType: "uint24",
                        name: "category",
                        type: "uint24",
                      },
                      {
                        internalType: "uint8",
                        name: "discountPercent",
                        type: "uint8",
                      },
                      {
                        internalType: "bool",
                        name: "allowOwnerMint",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "useReserveBeneficiaryAsDefault",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "transfersPausable",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "useVotingUnits",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "cannotBeRemoved",
                        type: "bool",
                      },
                      {
                        internalType: "bool",
                        name: "cannotIncreaseDiscountPercent",
                        type: "bool",
                      },
                    ],
                    internalType: "struct JB721TierConfig[]",
                    name: "tiers",
                    type: "tuple[]",
                  },
                  {
                    internalType: "uint32",
                    name: "currency",
                    type: "uint32",
                  },
                  {
                    internalType: "uint8",
                    name: "decimals",
                    type: "uint8",
                  },
                  {
                    internalType: "contract IJBPrices",
                    name: "prices",
                    type: "address",
                  },
                ],
                internalType: "struct JB721InitTiersConfig",
                name: "tiersConfig",
                type: "tuple",
              },
              {
                internalType: "address",
                name: "reserveBeneficiary",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "bool",
                    name: "noNewTiersWithReserves",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "noNewTiersWithVotes",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "noNewTiersWithOwnerMinting",
                    type: "bool",
                  },
                  {
                    internalType: "bool",
                    name: "preventOverspending",
                    type: "bool",
                  },
                ],
                internalType: "struct JB721TiersHookFlags",
                name: "flags",
                type: "tuple",
              },
            ],
            internalType: "struct JBDeploy721TiersHookConfig",
            name: "baseline721HookConfiguration",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "splitOperatorCanAdjustTiers",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "splitOperatorCanUpdateMetadata",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "splitOperatorCanMint",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "splitOperatorCanIncreaseDiscountPercent",
            type: "bool",
          },
        ],
        internalType: "struct REVDeploy721TiersHookConfig",
        name: "tiered721HookConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint24",
            name: "category",
            type: "uint24",
          },
          {
            internalType: "uint104",
            name: "minimumPrice",
            type: "uint104",
          },
          {
            internalType: "uint32",
            name: "minimumTotalSupply",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maximumTotalSupply",
            type: "uint32",
          },
          {
            internalType: "address[]",
            name: "allowedAddresses",
            type: "address[]",
          },
        ],
        internalType: "struct REVCroptopAllowedPost[]",
        name: "allowedPosts",
        type: "tuple[]",
      },
    ],
    name: "deployWith721sFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "contract IJB721TiersHook",
        name: "hook",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "hasMintPermissionFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
    ],
    name: "hashedEncodedConfigurationOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "hashedEncodedConfiguration",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isSplitOperatorOf",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
    ],
    name: "loansOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newSplitOperator",
        type: "address",
      },
    ],
    name: "setSplitOperatorOf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
    ],
    name: "tiered721HookOf",
    outputs: [
      {
        internalType: "contract IJB721TiersHook",
        name: "tiered721Hook",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "stageId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AutoIssue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "ticker",
                type: "string",
              },
              {
                internalType: "string",
                name: "uri",
                type: "string",
              },
              {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
              },
            ],
            internalType: "struct REVDescription",
            name: "description",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "baseCurrency",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "splitOperator",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint48",
                name: "startsAtOrAfter",
                type: "uint48",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "chainId",
                    type: "uint32",
                  },
                  {
                    internalType: "uint104",
                    name: "count",
                    type: "uint104",
                  },
                  {
                    internalType: "address",
                    name: "beneficiary",
                    type: "address",
                  },
                ],
                internalType: "struct REVAutoIssuance[]",
                name: "autoIssuances",
                type: "tuple[]",
              },
              {
                internalType: "uint16",
                name: "splitPercent",
                type: "uint16",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "percent",
                    type: "uint32",
                  },
                  {
                    internalType: "uint64",
                    name: "projectId",
                    type: "uint64",
                  },
                  {
                    internalType: "address payable",
                    name: "beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "preferAddToBalance",
                    type: "bool",
                  },
                  {
                    internalType: "uint48",
                    name: "lockedUntil",
                    type: "uint48",
                  },
                  {
                    internalType: "contract IJBSplitHook",
                    name: "hook",
                    type: "address",
                  },
                ],
                internalType: "struct JBSplit[]",
                name: "splits",
                type: "tuple[]",
              },
              {
                internalType: "uint112",
                name: "initialIssuance",
                type: "uint112",
              },
              {
                internalType: "uint32",
                name: "issuanceCutFrequency",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "issuanceCutPercent",
                type: "uint32",
              },
              {
                internalType: "uint16",
                name: "cashOutTaxRate",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "extraMetadata",
                type: "uint16",
              },
            ],
            internalType: "struct REVStageConfig[]",
            name: "stageConfigurations",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "contract IJBPayoutTerminal",
                name: "terminal",
                type: "address",
              },
            ],
            internalType: "struct REVLoanSource[]",
            name: "loanSources",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "loans",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct REVConfig",
        name: "configuration",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "contract IJBTerminal",
            name: "terminal",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint8",
                name: "decimals",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "currency",
                type: "uint32",
              },
            ],
            internalType: "struct JBAccountingContext[]",
            name: "accountingContextsToAccept",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct JBTerminalConfig[]",
        name: "terminalConfigurations",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "contract IJBBuybackHook",
            name: "hook",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint24",
                name: "fee",
                type: "uint24",
              },
              {
                internalType: "uint32",
                name: "twapWindow",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "twapSlippageTolerance",
                type: "uint32",
              },
            ],
            internalType: "struct REVBuybackPoolConfig[]",
            name: "poolConfigurations",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct REVBuybackHookConfig",
        name: "buybackHookConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IJBSuckerDeployer",
                name: "deployer",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "localToken",
                    type: "address",
                  },
                  {
                    internalType: "uint32",
                    name: "minGas",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "remoteToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "minBridgeAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct JBTokenMapping[]",
                name: "mappings",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSuckerDeployerConfig[]",
            name: "deployerConfigurations",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct REVSuckerDeploymentConfig",
        name: "suckerDeploymentConfiguration",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint48",
            name: "mustStartAtOrAfter",
            type: "uint48",
          },
          {
            internalType: "uint32",
            name: "duration",
            type: "uint32",
          },
          {
            internalType: "uint112",
            name: "weight",
            type: "uint112",
          },
          {
            internalType: "uint32",
            name: "weightCutPercent",
            type: "uint32",
          },
          {
            internalType: "contract IJBRulesetApprovalHook",
            name: "approvalHook",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "reservedPercent",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "cashOutTaxRate",
                type: "uint16",
              },
              {
                internalType: "uint32",
                name: "baseCurrency",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "pausePay",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "pauseCreditTransfers",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowOwnerMinting",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowSetCustomToken",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowTerminalMigration",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowSetTerminals",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowSetController",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowAddAccountingContext",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "allowAddPriceFeed",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "ownerMustSendPayouts",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "holdFees",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "useTotalSurplusForCashOuts",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "useDataHookForPay",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "useDataHookForCashOut",
                type: "bool",
              },
              {
                internalType: "address",
                name: "dataHook",
                type: "address",
              },
              {
                internalType: "uint16",
                name: "metadata",
                type: "uint16",
              },
            ],
            internalType: "struct JBRulesetMetadata",
            name: "metadata",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "groupId",
                type: "uint256",
              },
              {
                components: [
                  {
                    internalType: "uint32",
                    name: "percent",
                    type: "uint32",
                  },
                  {
                    internalType: "uint64",
                    name: "projectId",
                    type: "uint64",
                  },
                  {
                    internalType: "address payable",
                    name: "beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "preferAddToBalance",
                    type: "bool",
                  },
                  {
                    internalType: "uint48",
                    name: "lockedUntil",
                    type: "uint48",
                  },
                  {
                    internalType: "contract IJBSplitHook",
                    name: "hook",
                    type: "address",
                  },
                ],
                internalType: "struct JBSplit[]",
                name: "splits",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSplitGroup[]",
            name: "splitGroups",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "address",
                name: "terminal",
                type: "address",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "uint224",
                    name: "amount",
                    type: "uint224",
                  },
                  {
                    internalType: "uint32",
                    name: "currency",
                    type: "uint32",
                  },
                ],
                internalType: "struct JBCurrencyAmount[]",
                name: "payoutLimits",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "uint224",
                    name: "amount",
                    type: "uint224",
                  },
                  {
                    internalType: "uint32",
                    name: "currency",
                    type: "uint32",
                  },
                ],
                internalType: "struct JBCurrencyAmount[]",
                name: "surplusAllowances",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBFundAccessLimitGroup[]",
            name: "fundAccessLimitGroups",
            type: "tuple[]",
          },
        ],
        indexed: false,
        internalType: "struct JBRulesetConfig[]",
        name: "rulesetConfigurations",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "encodedConfigurationHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "DeployRevnet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "encodedConfigurationHash",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "contract IJBSuckerDeployer",
                name: "deployer",
                type: "address",
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "localToken",
                    type: "address",
                  },
                  {
                    internalType: "uint32",
                    name: "minGas",
                    type: "uint32",
                  },
                  {
                    internalType: "address",
                    name: "remoteToken",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "minBridgeAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct JBTokenMapping[]",
                name: "mappings",
                type: "tuple[]",
              },
            ],
            internalType: "struct JBSuckerDeployerConfig[]",
            name: "deployerConfigurations",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct REVSuckerDeploymentConfig",
        name: "suckerDeploymentConfiguration",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "DeploySuckers",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSplitOperator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ReplaceSplitOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "additionalOperator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "permissionIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetAdditionalOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cashOutDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetCashOutDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "stageId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "StoreAutoIssuanceAmount",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
    ],
    name: "PRBMath_MulDiv_Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_AutoIssuanceBeneficiaryZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cashOutDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTimestamp",
        type: "uint256",
      },
    ],
    name: "REVDeployer_CashOutDelayNotFinished",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cashOutTaxRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCashOutTaxRate",
        type: "uint256",
      },
    ],
    name: "REVDeployer_CashOutsCantBeTurnedOffCompletely",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "terminal",
        type: "address",
      },
    ],
    name: "REVDeployer_LoanSourceDoesntMatchTerminalConfigurations",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_MustHaveSplits",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_NothingToAutoIssue",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_RulesetDoesNotAllowDeployingSuckers",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stageId",
        type: "uint256",
      },
    ],
    name: "REVDeployer_StageNotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_StageTimesMustIncrease",
    type: "error",
  },
  {
    inputs: [],
    name: "REVDeployer_StagesRequired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "revnetId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "REVDeployer_Unauthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentAllowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestedDecrease",
        type: "uint256",
      },
    ],
    name: "SafeERC20FailedDecreaseAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
] as const;
