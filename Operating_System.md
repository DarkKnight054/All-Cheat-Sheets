# Operating System
## Paging & Virtual Memory
#### What is paging and why paging is needed?

Paging is a memory management technique used by operating systems to manage how memory is allocated and used by programs. It is a way of breaking up a program's memory into fixed-sized blocks or pages, and then mapping these pages to physical memory locations as needed.

The main reason paging is needed is to allow programs to use more memory than is physically available in the computer's RAM. By breaking up a program's memory into pages, the operating system can load only the pages that are needed into RAM, and swap out pages that are not currently in use to disk storage. This allows programs to access more memory than is physically available, without causing the system to crash due to a lack of available memory.
<br/>
<br/>
![](../asset/images/image007.jpg)

<b>Let's dive into the concepts</b>
- Processes are dividing into pages and each page contain specific bytes of that process. Suppose, we've a process P1. and our page size is 2 Bytes whereas size of P1 is 4 Bytes. So, we'll need 4/2 or 2 page to store process P1. For better view look at this:


![](../asset/images/image009.png)


- Then we need to know about frames. Our main memory or disk storage is divided into frames. Each frame size is equal to each page size. Because we've to store a single page in a single frame. Suppose, our page 1 for process P1 is sotred at frame no.2 and page 2 for process p1 is stored at frame no.3. 

![](../asst/images.image010.png)
