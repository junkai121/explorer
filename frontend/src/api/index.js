
const urlApi = {
  //home
  candidatesTop: `/api/stake/candidatesTop`,
  txsByDay: `/api/txsByDay`,
  blocksRecent: '/api/blocks/recent',
  txsRecent: '/api/txs/recent',
  navigation: '/api/home/navigation',
  //address
  address: '/api/txs/statistics?address={address}',
  addressTxTrans: '/api/txs/trans/{pageNumber}/{pageSize}?address={address}',
  addressTxStake: '/api/txs/stake/{pageNumber}/{pageSize}?address={address}',
  addressTxDeclaration: '/api/txs/declaration/{pageNumber}/{pageSize}?address={address}',
  addressTxGov: '/api/txs/gov/{pageNumber}/{pageSize}?address={address}',
  addressAccount: '/api/account/{address}',
  addressStakeCandidate: '/api/stake/candidate/{address}',
  addressStakeCandidateStatus: '/api/stake/candidate/{address}/status',
  addressTxByAddress : '/api/txsByAddress/{address}/{pageNumber}/{pageSize}',
  addressStakeCandidateWeek: '/api/stake/candidate/{address}/power/week',
  addressStakeCandidateMonth: '/api/stake/candidate/{address}/power/month',
  addressStakeCandidateMonths: '/api/stake/candidate/{address}/power/months',
  addressStakeCandidateUptimeHour: '/api/stake/candidate/{address}/uptime/hour',
  addressStakeCandidateUptimeWeek: '/api/stake/candidate/{address}/uptime/week',
  addressStakeCandidateUptimeMonth: '/api/stake/candidate/{address}/uptime/month',
  //validatorDetail
  validatorDelegations: '/api/stake/validators/{validatorAddr}/delegations?page={currentPage}&size={pageSize}',
  validatorUnbondingDelegations: '/api/stake/validators/{validatorAddr}/unbonding-delegations?page={currentPage}&size={pageSize}',
  validatorRedelegations: '/api/stake/validators/{validatorAddr}/redelegations?page={currentPage}&size={pageSize}',
  validatorVote: '/api/stake/validators/{validatorAddr}/vote?page={currentPage}&size={pageSize}',
  validatorDepositorTxs: '/api/stake/validators/{validatorAddr}/depositor_txs?page={currentPage}&size={pageSize}',
  validatorsInfo: '/api/stake/validators/{address}',
  validatorWithdrawAddr: '/api/stake/validators/{validatorAddr}/withdraw-addr',
  validatorCommissionRewards: '/api/stake/validators/{validatorAddr}/commission-rewards',
  //header
  headerTx: '/api/tx/{searchValue}',
  headerSearchAccount: '/api/account/{searchValue}',
  headerSearchCandidate: '/api/stake/candidate/{searchValue}',
  headerSearchValue: '/api/search/{searchValue}',
  headerConfig: '/api/config',
  //blockInfo
  blockInfoHeight: '/api/block/blockinfo/{height}',
  blockInfoGov: '/api/txs/gov/{currentPage}/{pageSize}?height={blockHeight}',
  blockInfoValidatorSet: '/api/block/validatorset/{blockHeight}?page={currentPage}&size={pageSize}',
  blockInfoTransfer: '/api/txs/trans/{currentPage}/{pageSize}?height={blockHeight}',
  blockInfoStake: '/api/txs/stake/{currentPage}/{pageSize}?height={blockHeight}',
  blockInfoDeclaration: '/api/txs/declaration/{currentPage}/{pageSize}?height={blockHeight}',
  //blockList
  blockList: '/api/blocks?page={pageNumber}&size={pageSize}',
  blockListLatestheight: '/api/block/latestheight',
  //parameter
  govParams: '/api/params',
  //proposal
  proposalDetail: '/api/gov/proposals/{proposalId}',
  proposalDetailVoterTx:'/api/gov/proposals/{proposalId}/voter_txs?page={pageNumber}&size={perPageSize}',
  proposalDetailDepositorTx:'/api/gov/proposals/{proposalId}/depositor_txs?page={pageNumber}&size={perPageSize}',
  //proposalList
  proposalListVotingAndDeposit:'/api/gov/deposit_voting_proposals',
  proposalList: '/api/gov/proposals?page={pageNumber}&size={pageSize}',
  //searchResult
  searchResult: '/api/search/{searchValue}',
  //txDetail
  txDetail: '/api/tx/{txHash}',
  //txList
  txListTransfer: '/api/txs/trans/{pageNumber}/{pageSize}',
  txListStake: '/api/txs/stake/{pageNumber}/{pageSize}',
  txListDeclaration: '/api/txs/declaration/{pageNumber}/{pageSize}',
  txListGov: '/api/txs/gov/{pageNumber}/{pageSize}',
  //validatorList
  validatorList: '/api/stake/validators?page={pageNumber}&size={pageSize}&type={validatorStatus}&origin=browser',
  validatorListHeaderImg: 'https://keybase.io/_/api/1.0/user/lookup.json?fields=pictures&key_suffix={keyBase}',
  //sysdate
  sysdate: '/api/sysdate',
  //richList
  richListAccounts: '/api/accounts',
  //nativeAsset
  nativeAsset: 'api/assets/native/txs?page={pageNumber}&size={pageSize}&tx_type={tokenType}',
  //gateway
  gatewayAsset: 'api/assets/gateway/txs?page={pageNumber}&size={pageSize}&tx_type={tokenType}',
  //bondedtokens
  bondedtokensValidators: '/api/bondedtokens/validators?type={validatorStatus}',
  bondedtokensDelegations: '/api/stake/validators/{address}/delegations?needpage=false',
  //tokenStats
  tokenStats: '/api/tokenstats',
  tokenStatsDistribution: '/api/tokenstats/account_total',
  //txs
  allTypeList:'/api/txs?page={pageNumber}&size={pageSize}&total=true',
  allTypeListQuireHeight:'/api/txs?page={pageNumber}&size={pageSize}&height={height}&total=true'
};

export default urlApi
