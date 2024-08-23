const treasureABI = [
    {
      type: "constructor",
      inputs: [
        { name: "_tokenURI", type: "string", internalType: "string" },
        { name: "_kakarottoItem", type: "address", internalType: "address" },
        { name: "_initialOwner", type: "address", internalType: "address" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "BRONZE",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "DIAMOND",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "GOLD",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "MAX_TOKEN_ID",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "MINT_ACTION",
      inputs: [],
      outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "OPEN_ACTION",
      inputs: [],
      outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "PLATINUM",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "SILVER",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "balanceOf",
      inputs: [
        { name: "account", type: "address", internalType: "address" },
        { name: "id", type: "uint256", internalType: "uint256" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "balanceOfBatch",
      inputs: [
        { name: "accounts", type: "address[]", internalType: "address[]" },
        { name: "ids", type: "uint256[]", internalType: "uint256[]" },
      ],
      outputs: [{ name: "", type: "uint256[]", internalType: "uint256[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "burn",
      inputs: [
        { name: "account", type: "address", internalType: "address" },
        { name: "id", type: "uint256", internalType: "uint256" },
        { name: "value", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "burnBatch",
      inputs: [
        { name: "account", type: "address", internalType: "address" },
        { name: "ids", type: "uint256[]", internalType: "uint256[]" },
        { name: "values", type: "uint256[]", internalType: "uint256[]" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "isApprovedForAll",
      inputs: [
        { name: "account", type: "address", internalType: "address" },
        { name: "operator", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "kakarottoItem",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "mint",
      inputs: [
        { name: "_creator", type: "address", internalType: "address" },
        { name: "_createNftSignature", type: "bytes", internalType: "bytes" },
        { name: "_tokenId", type: "uint256", internalType: "uint256" },
        { name: "_value", type: "uint256", internalType: "uint256" },
        { name: "data", type: "bytes", internalType: "bytes" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "openTreasure",
      inputs: [
        { name: "_creator", type: "address", internalType: "address" },
        { name: "_createNftSignature", type: "bytes", internalType: "bytes" },
        { name: "_tokenId", type: "uint256", internalType: "uint256" },
        { name: "_itemURI", type: "string", internalType: "string" },
        { name: "_value", type: "uint256", internalType: "uint256" },
        { name: "_rarity", type: "uint256", internalType: "uint256" },
        { name: "_attributeCount", type: "uint256", internalType: "uint256" },
        {
          name: "_attributes",
          type: "uint8[]",
          internalType: "enum NFTLibrary.Attribute[]",
        },
        { name: "_values", type: "uint256[]", internalType: "uint256[]" },
        { name: "_isIncreases", type: "bool[]", internalType: "bool[]" },
        { name: "_isPercentss", type: "bool[]", internalType: "bool[]" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "recoverSigner",
      inputs: [
        { name: "_dataHash", type: "bytes32", internalType: "bytes32" },
        { name: "_signature", type: "bytes", internalType: "bytes" },
      ],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "safeBatchTransferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "ids", type: "uint256[]", internalType: "uint256[]" },
        { name: "values", type: "uint256[]", internalType: "uint256[]" },
        { name: "data", type: "bytes", internalType: "bytes" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "safeTransferFrom",
      inputs: [
        { name: "from", type: "address", internalType: "address" },
        { name: "to", type: "address", internalType: "address" },
        { name: "id", type: "uint256", internalType: "uint256" },
        { name: "value", type: "uint256", internalType: "uint256" },
        { name: "data", type: "bytes", internalType: "bytes" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setApprovalForAll",
      inputs: [
        { name: "operator", type: "address", internalType: "address" },
        { name: "approved", type: "bool", internalType: "bool" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setURI",
      inputs: [{ name: "newuri", type: "string", internalType: "string" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "supportsInterface",
      inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "tokenIdCounter",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "uri",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "verifySignature",
      inputs: [
        { name: "_creator", type: "address", internalType: "address" },
        { name: "_dataHash", type: "bytes32", internalType: "bytes32" },
        { name: "_signature", type: "bytes", internalType: "bytes" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "pure",
    },
    {
      type: "event",
      name: "ApprovalForAll",
      inputs: [
        {
          name: "account",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "operator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        { name: "approved", type: "bool", indexed: false, internalType: "bool" },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OpenTreasure",
      inputs: [
        {
          name: "_creator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "_tokenId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "_value",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TransferBatch",
      inputs: [
        {
          name: "operator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        { name: "from", type: "address", indexed: true, internalType: "address" },
        { name: "to", type: "address", indexed: true, internalType: "address" },
        {
          name: "ids",
          type: "uint256[]",
          indexed: false,
          internalType: "uint256[]",
        },
        {
          name: "values",
          type: "uint256[]",
          indexed: false,
          internalType: "uint256[]",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "TransferSingle",
      inputs: [
        {
          name: "operator",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        { name: "from", type: "address", indexed: true, internalType: "address" },
        { name: "to", type: "address", indexed: true, internalType: "address" },
        { name: "id", type: "uint256", indexed: false, internalType: "uint256" },
        {
          name: "value",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "URI",
      inputs: [
        { name: "value", type: "string", indexed: false, internalType: "string" },
        { name: "id", type: "uint256", indexed: true, internalType: "uint256" },
      ],
      anonymous: false,
    },
    { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
    {
      type: "error",
      name: "ECDSAInvalidSignatureLength",
      inputs: [{ name: "length", type: "uint256", internalType: "uint256" }],
    },
    {
      type: "error",
      name: "ECDSAInvalidSignatureS",
      inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }],
    },
    {
      type: "error",
      name: "ERC1155InsufficientBalance",
      inputs: [
        { name: "sender", type: "address", internalType: "address" },
        { name: "balance", type: "uint256", internalType: "uint256" },
        { name: "needed", type: "uint256", internalType: "uint256" },
        { name: "tokenId", type: "uint256", internalType: "uint256" },
      ],
    },
    {
      type: "error",
      name: "ERC1155InvalidApprover",
      inputs: [{ name: "approver", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC1155InvalidArrayLength",
      inputs: [
        { name: "idsLength", type: "uint256", internalType: "uint256" },
        { name: "valuesLength", type: "uint256", internalType: "uint256" },
      ],
    },
    {
      type: "error",
      name: "ERC1155InvalidOperator",
      inputs: [{ name: "operator", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC1155InvalidReceiver",
      inputs: [{ name: "receiver", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC1155InvalidSender",
      inputs: [{ name: "sender", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "ERC1155MissingApprovalForAll",
      inputs: [
        { name: "operator", type: "address", internalType: "address" },
        { name: "owner", type: "address", internalType: "address" },
      ],
    },
    { type: "error", name: "InvalidSignature", inputs: [] },
    {
      type: "error",
      name: "OwnableInvalidOwner",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "OwnableUnauthorizedAccount",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
  ];
  
  export default treasureABI;
  