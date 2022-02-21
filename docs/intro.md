---
sidebar_position: 1
description: Welcome to the Multi-Operator Validator Network
---

# 👋 Introduction

## What is Obol?

Obol Labs is a remote first research and software development team focused on POS infrastructure for public blockchain networks. Specific topics of focus are Internet Bonds, Distributed Validator Technology and Multi-Operator Validation. The core team currently includes 10 members that are spread across the world.

The core team is currently building the Obol Network, a protocol to foster trust minimized staking through multi-operator validation. This will enable low-trust access to Ethereum staking yield, which can be used as a core building block in a variety of Web3 products.

## The Network

The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and decentralization as it scales. In this chapter of Ethereum we will move onto the next great scaling challenge, which is stake centralization. To effectively mititgate these risks, credible neutrality must be used as a primary design principal. 

Obol as a layer is focused on scaling main chain staking by providing permissionless access to Distributed Validators. The network utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing configurations.

Similar to how roll up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling main chain staking while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of  the public blockchain networks that adopt it.

The Obol Network develops and maintains four core public goods:

- The [Distributed Validator Launchpad](./dvk/01_distributed-validator-keys.md), a CLI tool and dApp for bootstrapping Distributed Validators
- [Charon](./dv/01_introducing-charon.md), a middleware client that enables validators to run in a fault-tolerant, distributed manner
- [Obol Managers](./sc/01_introducing-obol-managers.md), a set of solidity smart contracts for the formation of Distributed Validators
- [Obol Testnets](./testnet.md), a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network

### Sustainable Public Goods

The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products.

The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of.

![](/img/DVT4.png)

## The Vision

The road to decentralising stake is a long one. At Obol we have divided our vision into two key versions of distributed validators. 

### V1 - Trusted Distributed Validators

The first version of distibuted validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster. 

A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group. 

### V2 - Trustless Distributed Validators

V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together. 

Version 2 of charon will layer in an incentivisation scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance. 

To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the deliniation between the two. 