# Operating System
## Paging & Virtual Memory
#### What is paging and why paging is needed?

Paging is a memory management technique used by operating systems to manage how memory is allocated and used by programs. It is a way of breaking up a program's memory into fixed-sized blocks or pages, and then mapping these pages to physical memory locations as needed.

The main reason paging is needed is to allow programs to use more memory than is physically available in the computer's RAM. By breaking up a program's memory into pages, the operating system can load only the pages that are needed into RAM, and swap out pages that are not currently in use to disk storage. This allows programs to access more memory than is physically available, without causing the system to crash due to a lack of available memory.
<br/>
<br/>
![](../asset/images/image007.jpg)

#### What is virtual memory

Virtual memory is a memory management technique used by operating systems to allow a computer to compensate for shortages of physical memory (RAM) by temporarily transferring data from the RAM to disk storage.

Virtual memory works by creating a <b>virtual address space</b> that is larger than the available physical memory. When a program does not need data that is currently in the RAM, the operating system moves data from the RAM to a temporary file on disk, freeing up space in the RAM for other programs or data. This process is known as swapping or paging. When the program needs the data again, the operating system swaps it back into the RAM.

## __In this article, main memory refers to RAM__


<b>Let's dive into the concepts</b>
- Processes are dividing into pages and each page contain specific bytes of that process. Suppose, we've a process P1. and our page size is 2 Bytes whereas size of P1 is 4 Bytes. So, we'll need 4/2 or 2 page to store process P1. For better view look at this:


![](../asset/images/image009.png)


- Then we need to know about frames. Our main memory or disk storage is divided into frames. Each frame size is equal to each page size. Because we've to store a single page in a single frame. Suppose, our page 1 for process P1 is sotred at frame no.2 and page 2 for process p1 is stored at frame no.3. 

- '0' in page_0 &rArr; '4' in frame_2 
- '1' in page_0 &rArr; '5' in frame_2
- '2' in page_1 &rArr; '8' in frame_4
- '3' in page_1 &rArr; '9' in frame_4


![](../asset/images/image010.png)


- Now we know CPU generates a logical address and frame in main memory works at physical address. So How these Connect? The answer is simple page table which is managed by memory management unit. A page table for a process refers to which page is stored in which frame. Suppose first record of page table for process P1 is frame_2 because page_0 of process P1 is stored in frame_2.
- CPU generates logical adress. How it looks like ? It contains 2 parts. 1st one refers to page number and 2nd one refers to page offset. For above example, if CPU wants to locate 3rd Byte of process P1 it will generate the logical address '<b>11</b>'
- Then it will refer to page table for process P1 and search for 1st part of logical adress which indicates the page number and frame number. In physical address same as logical adress 1st part refers to frame number in physical memory and 2nd part is same as plogical address since frame offset and page offset is same. 
- For above example, we'll get '<b>1001</b>' as physical address. Because page_1 is stored at frame_4 which is indicated by '<b>100</b>' and page offset is '<b>1</b>'. Now we can say '<b>1001</b>' &rArr; '<b>9</b>' So. 3rd Byte of process P1 is stored at 9th Byte of memory. Hope, you understand the whole process. For better understanding look at this picture.


![](../asset/images/image011.png)
