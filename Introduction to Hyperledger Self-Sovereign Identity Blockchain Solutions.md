## Chapter 1: Introduction to Hyperledger Self-Sovereign Identity Blockchain Solutions:

Hyperledger Indy, Aries, AnonCreds, and Ursa are a set of components that enable an important missing layer of the Internet—the trust layer. enable online trust

Indy, Aries, AnonCreds and Ursa are specifications, tools, and libraries that allow for the development of independent digital identities rooted on blockchains or other distributed ledgers.

---

## Chapter 2: Adding a layer of trust to the internet

### Verifiable Credentials:

process of vc model:

1. issuer prepares for the issuance of credentials by publishing some cryptographic public keys and (as needed) other data about the credentials to be issued into the Verifiable Data Registry (VDR).
2. issuer issues a credential to the holder.
3. holder present credentials to the varifier. varifier check vdr for credential authenticity. issuer is not involved in this interaction.

---

### Public and Private key:

issuer takes credential and private key and outputs the signature or digital signature that supplies to the holder. issuer publish that corresponding public key to the vdr.
varifier retrive public key from vdr and check the signature whether it is valid or invalid. any unwanted changes to the credentials make the signature corrupted and cannot be varified with public key.
summary - A holder will generate a presentation that will be checked by a verifier

But how varifier trust issuer?

---

### Claim and credentials:

Claim to mean a data element within a credential, and a credential to be made up of a set of claims.

proving claim of the credential is more secured than proving whole credential to the varifier.
vc is issued to holder and stored in holders digital wallet. holder decide when and where this credentials have to be used. this improves the privacy.

---

### SSI:

The Sovrin Foundation is a non-profit organization that operates the Sovrin Identity Network, a public, permissioned distributed ledger built for identity using Hyperledger Indy. Their mission is to create a global public utility for digital identity, providing a trust layer for people, organizations, and things. The foundation collaborates with leaders and thinkers in the self-sovereign identity community to establish foundational principles and governance documents.

---

### Decentralized Identifiers:

Decentralized Identifiers (DIDs) are a new type of identifier that can be created by anyone and are globally unique, highly available, and cryptographically verifiable. They can be resolved by a DID Resolver to return a DID Document (DIDDoc) containing public keys and service endpoints for communication with the entity that controls the DID. With DIDs, you can request proof of control of the DID from the controller, which can be used for verifiable credential presentations.

DIDDoc is retrievable through a DID Resolver, which uses the DID to look up the associated DIDDoc.

When a request to resolve a DID is made, the resolver looks up the DID on the ledger and retrieves the DIDDoc associated with that DID. The DIDDoc is then returned to the requester, who can use the information in the DIDDoc to communicate securely with the entity that controls the DID.

A DID (and DIDDoc) on a blockchain can never be removed, so "deleting" a DID really means no longer responding to requests for proof of control of the DID.

Proving control over identifiers like email and phone numbers can be insecure due to attacks on central authorities. DIDs, based on public/private keypairs, provide a more secure way to prove control. Verifiable credentials can prove the issuer's identity, usually through a published DID. Verifiers can either have a hard-coded list of trusted issuers or use a Trust Registry to look up the DID. Alternatively, they can retrieve the DIDDoc for the DID and use the service endpoint to connect to the issuer and ask for identity data. Trust is essential to determine if the received data can be trusted.

---

### DIDs from a Business Perspective:

Common identifiers used today often need to be reused, leading to privacy concerns. DIDs solve this problem by allowing users to create a unique DID for every service they connect to, resulting in multiple DIDs. Both sides of the relationship provide a DID to communicate with each other. Instead of creating a user ID and password, users can create and share a new DID with the site, and prove control over it when returning to the site. This eliminates the need for user IDs and passwords.

diddoc contains public key and service endpoint. an entity can encrypt message by public key from receivers diddoc and send to the receivers service end point. receiver can decrypt the message by his private key. this enables secure communication.s

---

### Types of DID: public and private

- Public DIDs are intended to be widely available and visible to anyone who comes across them.
- Public DIDs are usually put on blockchains to be highly available, controlled decentrally, and globally resolved.
- Private DIDs, also known as pairwise DIDs, are used to enable two or several parties to connect with each other.
- Private DIDs are not intended for use beyond the small, specific group of parties involved.
- Private DIDs are not shared beyond the specific group, and updates are sent directly to the other parties involved.
- Private DIDs are not written to the blockchain, reducing costs such as resources, time, and transaction fees.
- Private DIDs far outnumber public DIDs, reducing the load on public blockchains serving DIDs.

DIDs are used in two ways in an SSI ecosystem. Firstly, they are used to establish secure messaging channels between the agents of the participants, without any verifiable credentials involved.
Secondly, in the case of verifiable credentials, DIDs are used as the identifier for the issuer, and the public key related to the DID is used to verify the data in the verifiable credential. When a holder presents a verifiable credential to a verifier, the verifier needs to ensure that the credential was issued by a trusted and authorized issuer. To verify the authenticity and integrity of the credential data, the verifier needs to verify the cryptographic signature of the credential.
When a verifier receives a verifiable credential, they extract the issuer DID from the credential and use a DID resolver to retrieve the associated public key.
The verifier can then use the public key to verify the digital signature on the verifiable credential. If the digital signature is valid, the verifier can trust that the credential was issued by the entity associated with the DID.

---

### Agent and Wallets (Wallets are agent):

Software that process VCs and DIDs and interacts with other entities. <br>
All agents (with rare exceptions) have secure storage for holding identity-related data including DIDs, keys, and verifiable credentials.

---

### Trust over ip (ToIP):

Trust over IP (ToIP) is a global initiative aimed at developing a decentralized, interoperable digital identity network that enhances privacy, security, and user control. Self-sovereign identity (SSI) is a key component of the ToIP initiative.

ToIP aims to create a trust framework that enables interoperability between various SSI systems and other decentralized identity networks.
Ultimately, the goal is to create a more decentralized, user-centric, and privacy-preserving digital identity ecosystem.

image: https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS172x+1T2023/block-v1:LinuxFoundationX+LFS172x+1T2023+type@sequential+block@b7e581eabc324c1ca632ab322efc54af/block-v1:LinuxFoundationX+LFS172x+1T2023+type@vertical+block@37faff9479494a6ca1dec647c1e6b469

---

## Chapter 3:

Hyperledger Indy, Aries, AnonCreds, and Ursa are (awesome) implementations of the building blocks of the ssi.

### Intro to these frameworks:

- Hyperledger Indy was Hyperledger’s first "identity-focused" blockchain framework, joining Hyperledger in 2017
- Indy consists of just the ledger, tools for managing the ledger, and the client libraries for interacting with Indy ledgers for reading and writing.
- In 2018, the decision was made to migrate the indy-crypto code repository out of Indy and into its own project: Hyperledger Ursa.
- The initial transfer of code from Indy to Ursa was pretty straightforward, involving a lot of renaming and updating references, but little change.
- Hyperledger AnonCreds comes in 2022 with ZKP (zero knowledger proof)
- Aries is the "agent" part of the Hyperledger SSI stack
- The core of Aries is a set of protocol specifications to enable secure, DID-based messaging between agents (using DIDComm) and a set of higher level protocols for using that messaging to accomplish business goals, such as issuing, presenting, and verifying credentials.

image: https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS172x+1T2023/block-v1:LinuxFoundationX+LFS172x+1T2023+type@sequential+block@0afef42e63364f15aaa012a54d200712/block-v1:LinuxFoundationX+LFS172x+1T2023+type@vertical+block@b3ffae2d43514dec927769bfbac3db46

---

### Relations between Hyperledger ursa, indy, aries, anoncreds:

- Hyperledger Ursa is a shared cryptographic library that is used by various Hyperledger projects including Indy, Aries, and Anoncreds.
- Indy is a distributed ledger technology (DLT) specifically designed for self-sovereign identity (SSI) use cases, which provides a decentralized and tamper-evident environment for managing identity-related data.
- Aries is a toolkit for building interoperable SSI applications (or agents) that allows for secure, peer-to-peer communication and data exchange between different identity systems. Aries includes implementations of the protocols, architecture, and tests.
- Anoncreds is a privacy-preserving, zero-knowledge credential scheme that is used in the context of SSI to allow users to prove certain attributes about themselves without revealing their identity or any other sensitive information.

In summary, Ursa provides the cryptographic building blocks used by Indy, which is a DLT (Distributed Ledger Technology) for SSI, while Aries provides a toolkit for building interoperable SSI applications, and Anoncreds is a specific privacy-preserving credential scheme used in SSI. These projects are all part of the Hyperledger ecosystem and aim to provide a secure and decentralized foundation for managing identity-related data.

Aries provides the messaging framework for exchanging messages in a formalized sequence to accomplish some shared task. The messaging is provided at two layers: the lowest layer allows agents to exchange messages, while the next layer allows for formalized protocols like the "issue credential" protocol, where an issuer agent coordinates with a holder agent to offer, be asked for, and deliver a verifiable credential. The messaging protocols need to be carefully specified and implemented as code by multiple participants. The text also introduces the DIDComm (DID Communications) protocol that uses data associated with DIDs (public keys and service endpoints) to secure and address messages.
