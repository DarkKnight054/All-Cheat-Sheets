## Aries-Mobile-Agent(Bifold)

- Built on <b>React Native, Aries Framework Javascript</b>.
- One of Bifold's key features is its capacity to hold and utilize VCs in the <b>AnonCreds format</b>.
- Working towards supporting other formats, such as W3C.

### Key Notes About Bifold

<ul>
<li>AFJ uses some Rust libraries, specifically Indy-SDK, which are compiled into native code. These libraries will soon be replaced by Indy-VDR and AnonCreds-rs.</li>
<li>Bifold uses the AFJ library, which in turn uses these Rust libraries.</li>
<li>The Indy-SDK library has been cross-compiled for ARM CPU architecture, meaning it works on iOS devices and Android devices/emulators but not on iOS simulators.</li>
<li>Indy-SDK uses the ZMQ protocol to interact with the Indy ledgers. This might be blocked by some corporate firewalls as it's a non-standard protocol that doesn't use HTTP/s.</li>
<li>AFJ uses the HTTP protocol to communicate with Aries agents and WebSockets for messaging via a mediator.
Bifold relies on a mediator because mobile devices don't have a fixed IP address and often don't accept inbound network connections. The mediator, a service that runs on a server with a fixed IP address, relays messages between an agent and Bifold. The mediator is configured within the Bifold app.</li>
</ul>

Identity successfully registered:
Seed: omarsultanomatsultanomarsultan77
DID: EvZ3mUSyzfhneomCm4qNY3
Verkey: 8b9L2P3VLLi3RNZRhj3BMiFQQDxXwv1N29NtFrF8XtUS

ngrok config authtoken - 2RWLgq0q9PZQwWvrrPI59gaU5po_7oTzoUyWFa6Afxmd9N75g
