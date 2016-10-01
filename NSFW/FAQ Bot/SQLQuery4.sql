insert into FAQ (Code, Name, Cause, Resolution) values
('0x00000001','APC_INDEX_MISMATCH','The most common cause of this bug check is when a file system or driver has a mismatched sequence of calls to disable and re-enable APCs. The key data item is the *Thread*->**CombinedApcDisable** field. The **CombinedApcDisable** field consists of two separate 16-bit fields: **SpecialApcDisable** and **KernelApcDisable**. A negative value of either field indicates that a driver has disabled special or normal APCs (respectively) without re-enabling them. A positive value indicates that a driver has enabled special or normal APCs too many times',
'The !analyze debug extension displays information about the bug check and can be very helpful in determining the root cause.

You can use the !apc extension to displays the contents of one or more asynchronous procedure calls (APCs).

You can also set a breakpoint in the code leading up to this stop code and attempt to single step forward into the faulting code.

For more information see the following topics:

Crash dump analysis using the Windows debuggers (WinDbg)

If you are not equipped to use the Windows debugger to work on this problem, you can use some basic troubleshooting techniques.

* Check the System Log in Event Viewer for additional error messages that might help identify the device or driver that is causing this bug check.
*If a driver is identified in the bug check message, disable the driver or check with the manufacturer for driver updates.
*Confirm that any new hardware that is installed is compatible with the installed version of Windows. For example, you can get information about required hardware at [Windows 10 Specifications](https://www.microsoft.com/en-us/windows/windows-10-specifications).
*For additional general troubleshooting information, see Blue Screen Data.'),
('0x0000000A','IRQL_NOT_LESS_OR_EQUAL',
'This bug check is issued if paged memory (or invalid memory) is accessed when the IRQL is too high. This is usually caused by drivers using improper addresses.

The error that generates this bug check usually occurs after the installation of a faulty device driver, system service, or BIOS.

If you encounter bug check 0xA while upgrading to a later version of Windows, this error might be caused by a device driver, a system service, a virus scanner, or a backup tool that is incompatible with the new version.',
'If a kernel debugger is available, obtain a stack trace.'),
('0x0000000F','SPIN_LOCK_ALREADY_OWNED',
'Typically, this error is caused by a recursive request for a spin lock. It can also occur if something similar to a recursive request for a spin lock has been initiated--for example, when a spin lock has been acquired by a thread, and then that same thread calls a function, which also tries to acquire a spin lock. The second attempt to acquire a spin lock is not blocked in this case because doing so would result in an unrecoverable deadlock. If the calls are made on more than one processor, then one processor will be blocked until the other processor releases the lock.

This error can also occur, without explicit recursion, when all threads and all spin locks are assigned an IRQL. Spin lock IRQLs are always greater than or equal to DPC level, but this is not true for threads. However, a thread that is holding a spin lock must maintain an IRQL greater than or equal to that of the spin lock. Decreasing the thread IRQL below the IRQL level of the spin lock that it is holding allows another thread to be scheduled on the processor. This new thread could then attempt to acquire the same spin lock.',
'Ensure that you are not recursively acquiring the lock. And, for threads that hold a spin lock, ensure that you are not decreasing the thread IRQL to a level below the IRQL of the spin lock that it is holding.'),
('0x0000007E','SYSTEM_THREAD_EXCEPTION_NOT_HANDLED',
'The SYSTEM_THREAD_EXCEPTION_NOT_HANDLED bug check is a common bug check. To interpret it, you must identify which exception was generated.

Common exception codes include the following:

*0x80000002: STATUS_DATATYPE_MISALIGNMENT indicates an unaligned data reference was encountered.
*0x80000003: STATUS_BREAKPOINT indicates a breakpoint or ASSERT was encountered when no kernel debugger was attached to the system.
*0xC0000005: STATUS_ACCESS_VIOLATION indicates a memory access violation occurred.

For a complete list of exception codes, see the Ntstatus.h file that is located in the inc directory of the Microsoft Windows Driver Kit (WDK).',
'If you are not equipped to use the Windows debugger to work on this problem, you should use some basic troubleshooting techniques.
*Check the System Log in Event Viewer for additional error messages that might help identify the device or driver that is causing bug check 0x7E.
*If a driver is identified in the bug check message, disable the driver or check with the manufacturer for driver updates.
*Check with your hardware vendor for any BIOS updates. Hardware issues, such as BIOS incompatibilities, memory conflicts, and IRQ conflicts can also generate this error.
*You can also disable memory caching/shadowing of the BIOS might to try to resolve the error. You should also run hardware diagnostics, that the system manufacturer supplies.
*Confirm that any new hardware that is installed is compatible with the installed version of Windows. For example, you can get information about required hardware at Windows 10 Specifications.
*For additional general troubleshooting information, see Blue Screen Data.');