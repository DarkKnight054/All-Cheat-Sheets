### concepts to know:

- self-sovereign identity
- trust over IP
- decentralized identifiers
- zero-knowledge proofs
- selective disclosure
- revocation
- secure storage
- verifiable credential formats
- agent

- self-sovereign identity(ssi): idea that you control your own data and you control when and how it is provided to others, and that when it is shared, it is done so in a trusted way with your consent.

- trust over ip: a Linux Foundation organization that (per the ToIP website) is defining a complete architecture for Internet-scale digital trust that combines both cryptographic trust at the machine layer and human trust at the business, legal, and social layers.

- two stacks in ToIP: a governance stack and a technology stack. The governance stack focuses on the information and rules needed to govern each layer of the technology stack

- Decentralized Identifier (DID): a self-generated universally unique identifier. The DID and related content for the DIDDoc is published by its controller (often an Aries agent) to an Indy ledger. Once done, anyone that has access to DID Resolver software that supports Indy can resolve the DID and get back the DID Doc for that DID. Peer DIDs are created and exchanged peer-to-peer between pairs of messaging agents. Such DIDs are shared directly with the paired agent and so do not need to be published on a distributed ledger. Such DIDs are used only for messaging.

- Zero-Knowledge Proof (ZKP) is a cryptographic method of proving (as in mathematically prove, not just claim) to someone that you know the value of an attribute without sharing the value of the attribute itself. For example, proving based on a "date of birth" claim that a person is older than a given age (e.g., older than 18) without providing the date of birth itself.

- Zero knowledge proof - an individual trying to prove they are overage to enter a bar, rather than sharing all the information in the ID card such as name, surname, and address, only share their date of birth.

- Selective disclouser: ability to share only selective claims rather than all claims in credentials.

- Revocation: ability of the issuer to publish that an issued varifiable credential is no longer active. that means issuer can revoke the verified credentials after a certain time.

- Verifiable credential format: Verifiable Credentials and Verifiable Presentations are usually in the form of JWT (JSON Web Token) and JSON-LD (JSON Linked Data). The format depends on the use case requirements and the need for different signature types.
  https://www.w3.org/TR/vc-data-model/

- Secure storage: agent maintains a secure storage for key management system for private keys. Secure storage store (peer DIDs and connection metadata), verifiable credentials issued to you, cached ledger objects, and the state of protocols that are currently "in flight" (e.g., while your agent is being issued a credential). All of the data in Aries secure storage is encrypted, with the decryption keys carefully managed.

## Chapter 2: Aries Agent

Three kind of aries agents -

- A mobile agent to hold a credential and prove claims from that credential.
- An issuing agent.
- A verifying agent.

mobile apps cannot have their own physical endpoint, it is not possible for an enterprise agent (such as Faber’s enterprise agent) to send a message directly to a mobile wallet. Rather, each mobile wallet must have a routing agent that gives other agents a physical endpoint to which they can send messages destined for the wallet.

Aries agents can be configured to interact with a variety of ledgers, including Hyperledger Indy ledgers (such as the Sovrin Foundation’s MainNet) and other types of networks, such as Microsoft’s Ion that is rooted on Bitcoin.

### Logical components of aries agent:

- agent deployments have two logical components: a framework and a controller.

The framework contains the standard capabilities that enable an Aries agent to interact with its surroundings—ledgers, storage, verifiable credentials, presentations and other agents.
The controller is the component that, well, controls the behavior of an instance of an Aries framework—the business rules for that particular agent instance.

- Aries agent architechture: The framework provides all of the core Aries functionality such as interacting with other agents and the ledger, managing secure storage, sending event notifications to, and receiving instructions from the controller. The controller executes the business logic that defines how a particular agent instance behaves—how it responds to the events it receives, and when to initiate events.

- Aries Agent Internals and Protocols: Aries uses DIDComm protocols for messaging.

## Agent to agent communication process:

- Agents Discovery: Faber's agent discovers the existence of Alice's agent and sends an invitation to connect.

- Invitation: Faber's invitation contains information on how messages can be encrypted and securely sent to Faber's agent. It is typically presented as a plaintext QR code.

- Request to Connect: Alice's agent, after confirming with Alice, generates a new private decentralized identifier (DID) for the relationship and embeds it in a "request to connect" message. This message is securely encrypted using the information from the invitation.

- Handling the Request: Faber's agent associates Alice's message with the earlier invitation and consults with Faber's controller (the entity controlling Faber's agent) to decide how to proceed.

- Response: If Faber's controller approves, Faber's agent stores Alice's connection information, generates a new private DID for the relationship, and sends a response message to Alice's agent using the public key and endpoint information from Alice's DID.

- Connected Agents: With the successful response, the agents of Faber and Alice are now connected. They can exchange messages securely and privately using the newly established encrypted communication channel.

## Types of Aries Frameworks:

- Aries Cloud Agent Python (ACA-Py): a mature, cloud-based agent designed for enterprise deployments in the self-sovereign identity (SSI) ecosystem.
- Aries Framework Go(AF-Go): Supports JSON-LD verifiable credentials using LD-Signatures and BBS+ Signatures, on VDRs other than Indy
- Aries Framework Javascript(AFJ): Support for both AnonCreds and JSON-LD (using LD-Signatures and BBS+ Signatures) verifiable credentials.
- Aries VCX (for Verifiable Credential eXchange): Implemented in Rust with a C-callable interface, and official wrappers for Java (including Android), iOS, and NodeJS.
- Aries Framework .NET: The framework is still in use, but the open source version is getting only a minimum of updates.

[AIP - Aries Interop Profiles (define how Aries agents should behave)]

- AATH - Aries Agent Test Harness

In the Aries Agent Test Harness (AATH), test scripts are executed to simulate interactions between different participants in a verifiable credential ecosystem. For example: participants include ACME as an issuer, Bob as a holder/prover, Faber as a verifier, and Mallory as a sometimes malicious holder/prover.

The Aries Agent Test Harness (AATH) includes a "mobile" backchannel specifically designed to test mobile wallet apps. This backchannel allows the AATH to interact with an Aries mobile wallet running on a physical phone. The backchannel provides directions and displays QR codes for connecting the mobile wallet to other test agents. The actions of the other agents drive the behavior of the mobile wallet.

BDD - Behavior Driven Development (BDD) engine is responsible for executing the test scripts and coordinating the interactions between the different components under test.

Aries RFC (Request for Comments): refers to the set of community-created protocols and standards that define the behavior and interactions of Aries agents.

## Chapter 3:

There are three roles in which an organization producing self-sovereign identity solutions:

1. Operating a ledger node (require installation and maintainance knowledge)
2. Contributing a ledgere project
3. Building product for a use case using a ledger.

In aries, we are doing point 3 and we do not have to spend much time to understand about ledger.
In Aries, no private data goes on the ledger, and the data written to the ledger is extremely limited to the verifiable credential use case. Credentials are NEVER written to the ledger.

## Distributed Ledgers:

- Distributed ledgers are commonly used in verifiable credential ecosystems for publishing cryptographic keys and credential metadata.
- Ledger data is immutable, preventing changes or removal of published information.
- Consensus among multiple parties ensures the integrity of ledger data.
- Published data is highly available due to replication across independent parties.
- Verifiable credentials themselves are never stored on the ledger.
- Alternative methods for publishing DIDs include "did:web" using web servers, "did:github" for quick development purposes, and "did:orb" utilizing the ActivityPub protocol for trusted publication without a distributed ledger.
- Other DIDs encountered in Aries development include Indy DIDs, did:key, and did:peer.

- The choice of DID publishing method depends on specific requirements and considerations of the verifiable credential ecosystem.
- When selecting DID methods for verifiable credential purposes, it is important to research and ensure their longevity.
- DID methods rooted in major permissionless blockchains like Bitcoin and Ethereum, as well as private blockchains like Hyperledger Fabric, are worth considering.
- For AnonCreds verifiable credentials, issuers need a way to publish AnonCreds objects in addition to DIDs.
- The concept of "AnonCreds methods" is emerging, with limited implementations currently available.
- Public DIDs can be used for connecting and messaging with organizational Aries agents.

## Dont run a network for aries development

- An alternative to running a local Indy network is to use a public Indy network sandbox for development purposes.
- With this approach, developers access a remote network instead of running their own local network.
- The BC Government's BCovrin(be sovrin) networks (dev and test) are available for public use and are reliable for testing purposes.
- It's important to create unique objects on every run when using a public sandbox network, particularly ensuring that issuer DIDs are different each time.
- Indy DIDs are created from a seed, and using the same seeds in development can cause issues with long-lasting ledgers.
- Configuring the application to use randomly generated seeds ensures unique issuer DIDs on each run, avoiding problems with duplicate credential definitions.
- It's essential to use the appropriate approach for development, while considerations for production environments will be discussed in Chapter 8.
- The labs in the course will provide examples of development agents running against both local and remote sandbox Indy networks.

## Proof of concept

A proof of concept (PoC) is a demonstration or prototype that aims to validate the feasibility, potential, or practicality of a concept or idea.
The purpose of a PoC is to provide evidence that a concept or solution can work as intended and deliver the desired outcomes.

To release a proof of concept (PoC) application for multiple users, it's important to have a stable and accessible Indy network environment. Here are the key points:

- Running a locally hosted network is not practical for a PoC, so it's recommended to use a publicly accessible network.
- There are three options available for a publicly accessible network:
  - BCovrin sandbox test network: Suitable for long-term testing, supported by popular mobile wallet apps.
  - Public Indy networks operated by organizations like Sovrin and Indicio: Offer production and pre-production networks for testing and demos.
- Running your own network on cloud services like Amazon Web Services (AWS) or Azure, similar to BCovrin.
- Transitioning from a sandbox network to a permissioned test or production network requires additional considerations:
- Transaction authors must indicate their agreement to a legal agreement posted by the network owner.
- The author's DID on the network must be a permissioned "Endorser" DID or find an Endorser to sign transactions.
- Running your own network provides more control but requires additional maintenance and may limit interoperability with other vendor agents.
- BCovrin and public networks are often the best and sometimes the only options due to broader support and compatibility with mobile wallet apps.

## Genesis file

- The genesis file contains information about endpoints and cryptographic material for connecting to a ledger in an Indy network.
- It includes details about the genesis transactions, such as creating a trustee endorser DID with full write permission and permissioning nodes.
- The genesis file for Indy sandbox ledgers is usually the same, except for the ledger endpoints.
- The "magic" seed for the trustee endorser DID (000000000000000000000000Trustee1) grants access and write permissions to the ledger.
- Developers may encounter issues if they lack a genesis file or use a default file without updated endpoints.
- In production, a transaction endorser with network write permissions is needed to create a DID.
- Additional steps are required for permissioned test or production ledgers, as the "magic DID" is not known.
- To connect to a production ledger, the network's genesis file is used, but writing to the network is more complex without knowledge of the "magic DID".

[ "magic DID" refers to a specific decentralized identifier (DID) that enables full write access to an Indy network. ]

## Lab: Running a VON network instance

link : https://github.com/bcgov/von-network/blob/main/docs/UsingVONNetwork.md

VON network - Verifiable Organizations Network (A portable development level Indy Node network, including a Ledger Browser)

## Accessing multiple indy networks

- Aries agents need to be able to access and interact with multiple Indy ledgers simultaneously, as different use cases may involve credentials issued by different networks.
- Aries frameworks support the concept of using multiple ledgers, allowing agents to connect to and load genesis files for all required Indy networks.
- Issuer agents can be configured to write to one specific ledger while resolving Indy identifiers (DIDs or ledger object IDs) across all connected networks.
- The process works well, although collision handling may be necessary if the same object exists on multiple ledgers.
- A future approach introduces a new did:indy DID method that includes a reference to the ledger where the object resides, eliminating the need to check multiple ledgers and the possibility of collisions.
- Aries frameworks handle the complexity of connecting to and resolving objects on multiple Indy ledgers, relieving developers from most of the detailed implementation.
- Developers need to decide which ledgers to use, while the framework takes care of the ledger-related details.

## DID resolution process

- Aries supports various ledgers and DID methods, not just Indy.
- DIDs are resolved using a process similar to resolving web URLs, returning a DID document (DIDDoc) instead of a web page.
- Each DID includes a reference to a DID method, and each DID method has its own specification implemented in software to resolve the DID and retrieve the associated DIDDoc.
- The Universal Resolver is a central service that resolves DIDs by determining the DID method and using the corresponding driver to interact with the distributed ledger or storage location to fetch the DIDDoc.
- The W3C DID Registry currently contains 158 DID methods, each with its own specification and potentially requiring a separate driver for resolution.
- The Universal Resolver attempts to support all DID methods by implementing multiple drivers, but not all DID methods are expected to persist in the long run.
- While the Universal Resolver is a useful tool, relying solely on a centralized web service for resolving DIDs may not be a secure or scalable approach for building a trustworthy production layer for the Internet.

## Aries DID resolvers

- Aries frameworks provide a generic "resolveDID" call that can handle DIDs of any method and return the associated DID document (DIDDoc) using resolver plugins.
- The "resolveDID" call determines the DID's method and checks if there is a resolver plugin available for that specific method.
- Resolver plugins can be either local plugins within the Aries deployment or part of an external "universal resolver."
- Aries implementations typically have local resolver instances for commonly used DIDs like "did:sov," "did:peer," "did:key," and "did:web," and they fallback to a universal resolver for less common or obscure DIDs.
- The universal resolver can be the public DIF universal resolver or a local deployment of the DIF universal resolver, tailored to include only the necessary drivers for the relevant DID methods.
- Aries deployments can easily configure their policy on which DIDs to resolve and how, using a combination of built-in plugins and external resolvers.
- Built-in DID resolvers in Aries frameworks may include "did:peer," "did:key," and the ledger used by the Aries deployment (e.g., an Indy ledger).
- Aries implementations that do not support Indy, such as those based on Aries Framework Go, may rely on external DID resolvers for resolving Indy DIDs.

## The did:key DID method

The "did:key" method is a special DID method that represents a single public key as a DID. It is not published on a ledger but serves as a way to encode and handle a public key within the Aries ecosystem. Some key points about the "did:key" method are:

- A key pair of a known type (e.g., Ed25519) is created.
- The public key is encoded using "multibase" and "multicodec" standards according to the did:key specification.
- The encoded public key is prefixed with "did:key:" to form a DID (e.g., did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH).
- To resolve the DID, the encoding is reversed, removing the "did:key:" prefix and decoding the multibase/multicodec string to obtain the public key and its type.
- A DID document (DIDDoc) is generated by combining the DID, public key, and signature type into a fixed template.
- If applicable, a key agreement key (for encryption) can be derived from the verification key, and a key agreement block is included in the DIDDoc.
- The "did:key" method provides a powerful representation, allowing a plain public key to be treated similarly to other DIDs within the Aries ecosystem.

It's worth noting that the process of creating and handling "did:key" DIDs involves straightforward text processing, but it offers a convenient way to integrate public keys into the DID framework.

universal did resolver: https://dev.uniresolver.io/#did:key:zDnaerDaTF5BXEavCrfRZEk316dpbLsfPDZ3WJ5hRTPFU2169

## Universal DID resolver:

- The DIF Resolver website is an instance of the DIF Universal Resolver project, which aims to enable the resolution of publicly accessible DIDs.

- Entities that specify and implement a DID Method can contribute a resolver for their DID Method to the Universal Resolver project.

- The Universal Resolver returns the DIDDoc (DID Document) and DID Metadata associated with a given DID of any supported DID Method.

- Before resolving DIDs, it is advised to read the caveats mentioned on the DIF Resolver website, including the evolving nature of DIDs and the recommendation to deploy and operate your own resolver for production use.

- The first example is a DID from the Sovrin MainNet, did:sov:7Tqg6BwSSWapxgUDm9KKgg. The Sovrin DID Method transforms this DID into a DIDDoc, which contains additional standard entries derived from minimal information stored on the Sovrin Ledger.

- The second example is a did:web DID method, specifically did:web:did.actor:alice. The did:web method works by including the DNS name in the DID, and the full DIDDoc for the DID is stored on the web server at the location https://<dns>/<did>/did.json.

- Another example is the did:github DID Method, such as did:github:gjgd. It allows publishing a DID associated with a GitHub account without the need for a distributed ledger.

- The list of examples suggests trying to resolve DIDs based on various DID Methods, including did:btcr (Bitcoin ledger), did:erc725 (Ethereum ledger), did:ethr (another Ethereum-based DID method), did:ion (Bitcoin-rooted DID using Microsoft's Ion DID Method), did:ipid (IPFS-based DID), and did:key (a DID representing a public key wrapped in the DID itself).

## DID Registration

- DID registration is the process of creating and publishing a DID.

- Different Aries deployments may choose to publish DIDs to different places.

- Aries frameworks need to enable diversity in DID registration approaches.

- The approach taken in Aries frameworks for DID registration is conceptually the same as for DID resolution.

- A generic "registerDID" call is made that determines the type of DID to be registered and uses a plugin to actually create and publish the DID.

- The interface and plugin for DID registration are more complicated compared to DID resolution because of the extra information needed for registration, which may be DID method specific.
