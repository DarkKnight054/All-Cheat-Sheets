# Raw Node Js Project

<h3><b>A node js file must have these sections</b></h3>
<ul>
    <li>Dependencies</li>
    <li>Module Scaffolding</li>
    <li>Configuration</li>
    <li>others</li>
</ul>

<b>N.B:</b> Regular expression for trimming the exact URL is given below:

<p>
    const parsedUrl = url.parse(req.url,true);
    <br/>
    const pathname = parsedUrl.pathname;
    <br/>
    const trimmedPath = pathname.replace(/^\/+|\/+$/g,'');
</p>
