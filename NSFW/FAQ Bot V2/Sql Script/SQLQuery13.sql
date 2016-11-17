insert into dbo.help(category_id,question,sub_question,answer,link) values
(13,'Protect your PC','',
'Windows 10 is safer and more secure thanks to Windows Defender and Windows Firewall.

When you start Windows 10 for the first time, Windows Defender works to help protect your PC by scanning for malicious or unwanted software.

Windows Defender uses real-time protection to scan everything you download or run on your PC.

Screenshot of Windows Defender

To scan specific files or folders, select them, then right-click (or press and hold) and choose Scan with Windows Defender. If Windows Defender finds anything malicious, it notifies you in the app and recommends what you should do next to keep your PC safe.

Windows Firewall filters the information coming into your PC from the Internet, blocking potentially harmful programs. To turn it off:
1. Select the Start button, then select Windows System > Control Panel.
2. Select System and Security > Windows Firewall > Turn Windows Firewall on or off > pick the networks you want to change settings for > OK.

# Note
If your PC is connected to a network, you might not be able to change your Windows Firewall settings because of network policies. Contact your administrator for more info.

To turn off real-time protection temporarily:
1. Select the Start button, then select Settings  > Update and Security > Windows Defender.
2. Turn off Real-time protection.

# Note
Windows Defender automatically turns off if you install another antivirus app.',
'https://support.microsoft.com/en-us/help/17187/windows-10-protect-your-pc'),
(13,'Where is Action Center in Windows 10?','',
'In Windows 10, the new action center is where you"ll find app notifications and quick actions. But the old action center is still here—it"s been renamed Security and Maintenance. And it"s still where you go to change your security settings.
In the search box on the taskbar, enter security and maintenance and then select Security and Maintenance.',
'https://support.microsoft.com/en-us/instantanswers/1ad94232-180e-42c3-9a43-70ba9a4ac5ca/where-is-action-center-in-windows-10'),
(13,'Schedule a scan in Windows Defender','',
'Windows Defender regularly scans your PC to help keep it safe. We try to do this while you’re not using your PC, so it doesn’t interfere with your work. You can also schedule Windows Defender to scan at a time and frequency that you choose.
1. Search for and open Schedule tasks.
2. In the left pane, expand Task Scheduler Library > Microsoft > Windows, and then scroll down and double-click (or tap) the  Windows Defender folder.
3. In the top center pane, double-click (or tap twice)  Windows Defender Scheduled Scan. 
4. In the Windows Defender Scheduled Scan Properties (Local Computer) window, select the Triggers tab, go to the bottom of the window, and then tap or click New.
5. Specify how often you want scans to run and when you’d like them to start.',
'https://support.microsoft.com/en-us/instantanswers/66eb0a31-2a59-4c90-ba5b-23bcdfb6f185/schedule-a-scan-in-windows-defender');