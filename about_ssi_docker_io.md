https://www.dock.io/post/self-sovereign-identity

## What is ssi

Self-Sovereign Identity (SSI) is a model that gives individuals full ownership and control of their digital identities without relying on a third party.

Self-Sovereign Identity is made up of 3 pillars: blockchain, decentralized identifiers, and Verifiable Credentials.

Advantages to Self-Sovereign Identity:
* Fully owning and controlling your data
* Increased security and privacy
* Eliminating central points of failure
* Data can’t be tracked and correlated (data that is used to trace back to someone’s identity or track online behavior)

Currently, Self-Sovereign Identity is used interchangeably with the term decentralized identity.

There are three main participants in the SSI system:
* Holder: Someone who creates their decentralized identifier with a digital wallet app and receives Verifiable Credentials.
* Issuer: Party with the authority to issue Verifiable Credentials.
* Verifier: Party checking the credential.  

The interactions between the holder, issuer, and verifier is sometimes called "the trust triangle."

Example:
For example, let's say a new gym opens and every employee must have a First Aid training certificate, which is valid for three years.

Holder: Sandy the job applicant
Issuer: First Aid training organization
Verifier: Gym

Here is how these roles interact in a Self-Sovereign Identity system:

1. Sandy (holder) has a digital identity wallet app, the Dock Wallet, on her phone that stores her Verifiable Credentials.

2. Sandy successfully passes her First Aid training and the training organization uses the Dock Certs platform to digitally issue her fraud-proof training certificate as a PDF.

3. Sandy scans the QR code on the PDF and imports it in the Dock Wallet.

4. The gym company uses Dock Certs to create a verification template to screen job applicants to ensure they have a valid First Aid certificate. The gym staff sends a QR code to Sandy to start the verification process.

5. Sandy scans the QR code with the Dock Wallet and she chooses her First Aid and CPR credential.

6. To maintain her privacy and not share more than she needs to, she only sends her credential certificate number and name but not her email address.

7. The gym instantly verifies that her credential is authentic and calls her for an interview.


With a Self-Sovereign Identity, no entity can remove your digital identity.


---


## Principles of Self-Sovereign Identity

## 4 Key Phases in the Evolution of Digital Identity

* Centralized identity
* Federated identity
* User-centric identity
* Self-sovereign identity

---


## SSI Pillar 1: Blockchain

* Holder: Owner of the Verifiable Credential (e.g. driver’s license) has their public DID on the blockchain.

* Issuer: When an issuer, like a government department, provides a Verifiable Credential to a holder like a driver’s license, they sign it with their DID and associated private key. The department’s DID and associated public key will be on the blockchain.

* Verifier: A verifier, like an on-demand driving company, can check the blockchain to ensure that the government department they trust did in fact issue the license because the credential was signed by the issuer’s DID that is on the blockchain.

---


## SSI Pillar 2: Decentralized Identifiers (DIDs)

A DID:
- Is created by the user
- Comes with one or many private key and public key pairs
- Does not contain personal data or wallet information
- Enables private and secure connections between two parties and can be verified anywhere at any time

People can make as many DIDs as they want for different purposes and interactions.

## SSI Pillar 3: Verifiable Credentials (VCs)

Verifiable Credentials are a digital, cryptographically-secured version of paper and digital credentials that people can present to parties that need them for verification. An employer for example can simply use an app to scan a job candidate’s QR code to confirm that they have a bachelor’s degree without needing to spend days or weeks contacting a university to verify if someone’s degree is authentic.

* There are two main ways Self-Sovereign Identity blockchain companies can enable people to preserve privacy:
1) Selective Disclosure
2) Zero-Knowledge Proofs (ZKPs)


Here is another example of how public and private keys are used in the SSI system.

* Holder: Tommy
* Issuer: Government department
* Verifier: Online English education company

An online English education company in Japan wants to hire contract teachers from the USA and Canada only. They use Verifiable Credentials as part of their screening process to ensure that teachers are residents in North America.

- Tommy has a DID in his Dock Wallet and wants to add his passport details on it
- Tommy goes to the government office and the staff asks him to scan a QR code, which enables a secure connection and exchange of DIDs
- The staff uses the private key to sign and issue the digital passport as a Verifiable Credential
- Tommy accepts the credential and stores it in his wallet
- The online education company requests data to confirm that he lives in Canada or the USA
- Tommy authorizes the online education company to see his relevant data
- The company verifies the credential that confirms that he lives in Canada


### Self-Sovereign Identity Wallet
A secure Self-sovereign Identity wallet is essential because it allows people to carry their credentials anywhere on their phone or digital device. Portability is one of the principles of SSI.

Key aspects of an SSI wallet:

- Enables people to securely store and manage DIDs and Verifiable Credentials without relying on a third party
- A holder must give the authorization to share data to a verifier who needs to confirm eligibility to access services or products
- Makes it harder for companies to track or correlate information back to the user
- People can access websites and apps without revealing personal information or any more details than necessary
- People can sign in with a DID rather than creating a new account with a user name and password to access another website or app
