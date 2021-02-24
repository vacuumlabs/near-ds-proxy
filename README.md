# DS Proxy contract migrated to NEAR

Taken from - https://github.com/dapphub/ds-proxy

## Development

### Betanet

Deploy DSProxyFactory and ProxyRegistry contracts to NEAR betanet:

```
env NEAR_MASTER_ACCOUNT=[NEAR_ACCOUNT_ID].betanet truffle migrate --network near_betanet
```

### Localnet

Make sure `masterAccountId` and `evmAccountId` are set correctly in the `NearProvider` for the `near_local` configuration.

Run truffle migrations:

```
truffle migrate --network near_local
```

Store the contract address somewhere.

If you get an account/key error uncomment the `keyStore` section in `NearProvider` for `near_local` and paster your master account secret key.
