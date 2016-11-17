insert into dbo.help(category_id,question,sub_question,answer,link) values
(6,'Get online','',
'To connect to a WiFi network in Windows, select the Network icon ( or ) on the taskbar.

Select the WiFi network you want > Connect, then type the password and follow the instructions. That''s it-you''re connected! This icon  will appear in the taskbar.

WiFi network icon in the taskbar

After you''re connected, you''re ready to [set up email](https://support.microsoft.com/en-us/help/17198), browse the web, and do a whole lot more online.

If WiFi isn''t available, or you just want the assurance of a wired connection, the Ethernet cable is your friend—just connect your PC to your router or modem, and then do your thing.

If you''re having trouble getting connected, check out [Why can''t I get online?](https://support.microsoft.com/en-us/help/17220) to try to fix things.

# Tip
Some PCs have a SIM card in them that lets you connect over cellular data like you do on a phone. To see if your PC has one, select the Network icon ( or ) and look for the Cellular network icon  at the top of the list.',
'https://support.microsoft.com/en-us/help/17164/windows-10-get-online'),
(6,'Fix network connection issues in Windows 10', '', 
'If you’re having problems getting connected to a network and can’t connect to the Internet, here are some things you can try in Windows 10.

# Things to try first
Try these things first to help you fix or narrow down the connection problem

* Check out [Why can"t I get online?](https://support.microsoft.com/en-us/help/17220/windows-10-why-cant-i-get-online) and try some of the basic troubleshooting steps mentioned there.

* Generate a wireless network report. This report can help you diagnose the problem, or at least provide you with more information to give to others who might be able to help.

1. In the search box on the taskbar, type Command prompt, press and hold (or right-click) Command prompt, and then select Run as administrator > Yes.

2. At the command prompt, type netsh wlan show wlanreport.

This creates an HTML file that you can open in your web browser from the location listed under the command prompt. For more info about the network report and how to analyze it, see [Analyze the wireless network report](https://support.microsoft.com/en-us/help/4000462/windows-10-analyzing-wireless-network-report) in [Fix Wi-Fi problems in Windows 10](https://support.microsoft.com/en-us/help/4000432/windows-10-fix-wi-fi-problems).

* Make sure it’s not a problem with your cable modem or Internet service provider (ISP).

1. If it is, contact your ISP. In the search box on the taskbar, type Command prompt, press and hold (or right-click) Command prompt, and then select Run as administrator > Yes.
2. At the command prompt, type ipconfig.

Look for the IP address listed next to Default gateway. Write down that address if you need to. For example: 192.168.1.1

3. At the prompt, type ping <DefaultGateway> and press Enter. For example, type ping 192.168.1.1 and press Enter.

The result should be something like this:

Reply from 192.168.1.1: bytes=32 time=5ms TTL=64

Reply from 192.168.1.1: bytes=32 time=5ms TTL=64

Reply from 192.168.1.1: bytes=32 time=5ms TTL=64

Reply from 192.168.1.1: bytes=32 time=5ms TTL=64

Ping statistics for 192.168.1.1: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss), Approximate round trip times in milli-seconds: Minimum = 4ms, Maximum = 5ms, Average = 4ms

If the ping is successful and you see results similar to the results above, but can’t connect to the Internet on your PC, there may be a problem with your modem or Internet service provider (ISP).

# Update the network adapter driver

An outdated or incompatible network adapter driver can cause connection problems. If you recently upgraded to Windows 10, it"s possible that the current driver was designed for a previous version of Windows. Check to see if an updated driver is available.

1. In the search box on the taskbar, type Device Manager, and then select Device Manager from the list of results.

2. In Device Manager, select Network adapters > the network adapter name.

3. Press and hold (or right-click) the network adapter, and then select Update Driver Software > Search automatically for updated driver software. Follow the steps, then select Close.

4. After installing the updated driver, select the Start  button > Power > Restart if you"re asked to restart, and see if that fixes the connection issue.

If Windows can’t find a new driver for your network adapter, visit the PC manufacturer’s website and download the latest network adapter driver from there. If your PC can"t connect to the Internet, you"ll need to download a driver on a different PC and save it to a USB flash drive, so you can manually install the driver on your PC. You’ll need to know the PC manufacturer and model name or number.

# To manually install the network adapter driver

Do one of the following, depending on what kind of file you downloaded from the PC manufacturer’s website:

* If you downloaded an executable (.exe) file, just double-click the file to run it and install the drivers. That should be all you need to do.

* If you downloaded individual files, and at least one file has a .inf file name extension and another has a .sys extension, do the following:

1. In the search box on the taskbar, type Device Manager, and then select Device Manager from the list of results.

2. In Device Manager, select Network adapters > the network adapter name. (If it’s not listed there, check in Other devices.)

3. Press and hold (or right-click) the network adapter, and then select Update Driver Software > Browse my computer for driver software.

4. Select Browse > select the location where the driver files are stored > OK.

5. Select Next > follow the steps to install the driver > Close.

6. After you"ve updated the driver, select the Start  button > Power > Restart if you"re asked to restart, and see if that fixes the connection issue.

# Roll back the network adapter driver

If you were connected before and recently installed a new network adapter driver, rolling back your driver to a previous version might help.

1. In the search box on the taskbar, type Device Manager, and then select Device Manager from the list of results.

2. In Device Manager, select Network adapters  > the network adapter name.

3.Press and hold (or right-click) the network adapter, and then select Properties.

4. In Properties, select the Driver tab, select Roll back driver, then follow the steps.

If the button is unavailable, that means there"s no driver to roll back to.

5. After rolling back to the previous version of the driver, select the Start  button > Power > Restart if you"re asked to restart, and see if that fixes the connection issue.

If Windows can’t find a new driver for your network adapter, visit the PC manufacturer’s website and download the latest network adapter driver from there. If your PC can''t connect to the Internet, you''ll need to download a driver on a different PC and save it to a USB flash drive, so you can manually install the driver on your PC. You’ll need to know the PC manufacturer and model name or number

# Run the Network troubleshooter followed by networking commands

The Network troubleshooter can help diagnose and fix common connection problems. Using this troubleshooter, then running some networking commands afterwards if needed, can help get you connected.

To run the Network troubleshooter

1. In the search box on the taskbar, type Network troubleshooter, and then select Identify and repair network problems from the list of results.

2. Follow the steps in the troubleshooter and see if that fixes the problem

If that doesn’t fix your connection problem, try these things:

1. Reset the TCP/IP stack

2. Release the IP address

3. Renew the IP address

4. Flush and reset the DNS client resolver cache

To run these networking commands in a command prompt window

1. In the search box on the taskbar, type Command prompt, press and hold (or right-click) Command prompt, and then select Run as administrator > Yes.

2. At the command prompt, run the following commands in the listed order, and then check to see if that fixes your connection problem:

* Type netsh winsock reset and press Enter.

* Type netsh int ip reset and press Enter.

* Type ipconfig /release and press Enter.

* Type ipconfig /renew and press Enter.

* Type ipconfig /flushdns and press Enter.

# Temporarily turn off firewalls

Sometimes firewall software might prevent you from getting connected. You can see if the connection issue is caused by a firewall by turning it off temporarily and then trying to visit a website you trust.

The steps to turn off a firewall depend on the firewall software you’re using. Check the documentation for your firewall software to learn how to turn it off. Make sure you turn it back on as soon as you can. Not having a firewall turned on makes your PC more vulnerable to hackers, worms, or viruses.

If you have trouble turning off your firewall, do the following to turn off all firewall software that"s running on your PC. Again, make sure you turn your firewall back on as soon as you can.

To turn off all firewalls

1. In the search box on the taskbar, type Command prompt, press and hold (or right-click) Command prompt, and then select Run as administrator > Yes.

2. At the command prompt, type netsh advfirewall set allprofiles state off, and then press Enter.

3. Open your web browser and visit a website you trust and see if you can connect to it.


4. To turn on all firewalls you might have installed, at the command prompt, type netsh advfirewall set allprofiles state on, and then press Enter.

If you find the firewall software is causing the connection issues, contact the software manufacturer or visit their website to check and see if updated software is available.

# Temporarily turn off any antivirus or malware-prevention software

Sometimes antivirus or malware-prevention software might prevent you from getting connected. You can see if the connection issue is caused by antivirus and malware-prevention software by turning it off temporarily and then trying to visit a website you trust. If you find it is causing the connection issues, contact the software manufacturer or visit their website to see if updated software is available.

The steps to turn off antivirus or malware-prevention software depend on the software you’re using. Check the documentation for your software to learn how to turn it off. Make sure you turn it back on as soon as possible. Not having antivirus or malware-prevention software turned on makes your PC more vulnerable to hackers, worms, or viruses.

If you’re not sure what antivirus or malware-prevention software program you have installed, Windows might be able to tell you.

To find out what antivirus or malware-prevention software is installed

1. In the search box on the taskbar, type System and security, and then select Review your computer’s status and resolve issues.

2. Select the down arrow next to Security.

3. If Windows can detect your antivirus software, it"s listed under Virus protection. For malware-prevention software, look under Spyware and unwanted software protection.

4. If the antivirus or malware-prevention software is on, check the documentation for that software to learn how to turn it off.

Make sure you turn your antivirus or malware-prevention software back on as soon as you can to make sure your PC is better protected.

# Uninstall the network adapter driver and restart

If the previous steps didn’t work, try to uninstall the network adapter driver, and then restart your computer and have Windows automatically install the latest driver. Consider this approach if your network connection stopped working properly after a recent update.

Before uninstalling, make sure you have drivers available as a backup. Visit the PC manufacturer’s website and download the latest network adapter driver from there. If your PC can"t connect to the Internet, you"ll need to download a driver on a different PC and save it to a USB flash drive, so you can install the driver on your PC. You’ll need to know the PC manufacturer and model name or number.

1. In the search box on the taskbar, type Device Manager, and then select Device Manager from the list of results.

2. In Device Manager, select Network adapters > the network adapter name.

3. Press and hold (or right-click) the network adapter, and then select Uninstall > Delete the driver software for this device check box > OK to confirm you want to uninstall it.

4. After uninstalling the driver, select the Start  button > Power > Restart.

After your PC restarts, Windows will automatically look for and install the network adapter driver. Check to see if that fixes your connection problem. If Windows doesn"t automatically install a driver, try to install the backup driver you saved before uninstalling.

# Use network reset to reinstall network devices

Using network reset should be the last step you try. Consider using it if the steps above don’t help to get you connected.

This can help solve connection problems you might have after upgrading from a previous version of Windows to Windows 10, as well as fix problems where you can connect to the Internet, but not to shared network drives. It removes any network adapters you have installed and the settings for them. After your PC restarts, any network adapters are reinstalled, and the settings for them are set to the defaults.

# Note
To use network reset, your PC must be running Windows 10 Version 1607. To see what version of Windows 10 your device is currently running, select the Start  button, then select Settings  > System > About.

1. Select the Start  button, then select Settings  > Network & Internet > Status > Network reset.

2. On the Network reset screen, select Reset now > Yes to confirm.
Wait for your PC to restart and see if that fixes the problem.

# Notes
After using network reset, you might need to reinstall and set up other networking software you might be using, such as VPN client software or virtual switches from Hyper‑V (if you"re using that or other network virtualization software).

Network reset might set each one of your known network connections to a public network mode. In a public network mode, your PC is not discoverable to other PCs and devices on the network, which can help make your PC more secure. However, if your PC is part of a homegroup or used for file or printer sharing, you’ll need to make your PC discoverable again. To do this, go to Settings  > Network & Internet > Wi-Fi. On the Wi-Fi screen, select Manage known networks > the network connection you want to change > Properties, and then turn on the switch under Make this PC discoverable.
', 'https://support.microsoft.com/en-us/help/10741/windows-10-fix-network-connection-issues'),
(6,'Fix Wi-Fi problems','',
'Overview

Wi-Fi problems at home can slow down everyone in the house and be really frustrating. If you’re a hands-on person who"s usually called on to fix problems with your Wi-Fi network at home, this article can help you troubleshoot them in Windows 10.

With a few tools and some time, you can often find the problem or narrow things to fix your Wi-Fi. Before you get started with these advanced steps, make sure you’ve checked the basic things first if you’re having Wi-Fi problems.

This article is intended for people who are more advanced Windows PC users and are comfortable doing things like working in a command prompt window, running network reports, and making changes to their wireless router settings.

[Identify the problem you"re having with Wi-Fi](https://support.microsoft.com/en-us/help/4000458/windows-10-identify-wifi-problem) :	Basic questions to answer about your Wi-Fi problems. This will help you figure out what to do next.

[Wi-Fi connection icons and what they mean](https://support.microsoft.com/en-us/help/4000459/windows-10-wifi-icons) :	The Wi-Fi icon and connection states it shows.

[Check Wi-Fi drivers and settings in Windows 10](https://support.microsoft.com/en-us/help/4000460/windows-10-check-wifi-drivers-settings-problems) :	Solving network adapter driver problems.

[Wi-Fi problems and your home layout](https://support.microsoft.com/en-us/help/4000461/windows-10-wifi-problems-home-layout) :	Things in your home that can cause Wi-Fi problems and steps to take to try to fix things.

[Analyze the wireless network report](https://support.microsoft.com/en-us/help/4000462/windows-10-analyzing-wireless-network-report) :	How to create the wireless network report, analyze it, and use it to identify and fix Wi-Fi problems.

[Tools and apps](https://support.microsoft.com/en-us/help/4000463/windows-10-wifi-tools-apps) :	Windows 10 tools and apps you’ll need.

# Note
To help us make Wi-Fi better, please let us know about the problems you’re having. To give feedback, open the Feedback Hub on your Windows 10 PC, and then leave your feedback in the Connecting to a Wi-Fi network subcategory, which is in the Networks category
', 'https://support.microsoft.com/en-us/help/4000432/windows-10-fix-wi-fi-problems'),
(6,'Connect to Bluetooth devices','',
'Thanks to Bluetooth, you can use all sorts of wireless devices with your Windows PC—Bluetooth headphones, speakers, phones, fitness trackers—just to name a few. Start by pairing your Bluetooth device with your PC. The way you do this depends on the kind of Bluetooth device you"re using.

To connect a Bluetooth headset, speaker, or other audio device

1. Turn on your Bluetooth audio device and make it discoverable.

The way you make it discoverable depends on the device. Check the device or visit the manufacturer"s website to learn how.

2. Turn on Bluetooth on your PC if it"s not on already. To do this, on the taskbar, select action center  > Bluetooth.

3. In action center, select Connect > the device name.

4. Follow any more instructions that might appear. Otherwise, you"re done and connected.

Your Bluetooth device and PC will usually automatically connect anytime the two devices are in range of each other with Bluetooth turned on.

# Tip
Not seeing your Bluetooth audio device? [Learn how to try to fix this](https://support.microsoft.com/vi-vn/instantanswers/6b1037aa-5682-48ed-94d6-e257fcda6a45/fix-connections-to-bluetooth-audio-devices-and-wireless-displays).
To connect a Bluetooth keyboard, mouse, or other device

1. Turn on your device and make it discoverable.

2. Select the Start Start symbol button, then select Settings  > Devices > Bluetooth.

3. Turn on Bluetooth > select the device > Pair.

4. Follow any more instructions if they appear
','https://support.microsoft.com/en-us/help/17156/windows-10-connect-to-bluetooth-devices'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','Bluetooth is missing in Settings or can’t be turned on. How can I try to fix this?',
'Check Device Manager to make sure you have the latest Bluetooth drivers installed.

1. In the search box on the taskbar, type Device Manager, select it from the list of results, and then expand Bluetooth in Device Manager.

2. Press and hold (or right-click) the Bluetooth radio, then select Update Driver Software > Search automatically for updated driver software.

If Windows doesn"t find a new driver, look for one on the device manufacturer"s website and follow their instructions.

# Note
If your Bluetooth device won’t connect after you select Connect in action center, go to [Fix connections to Bluetooth audio devices and wireless displays](https://support.microsoft.com/en-us/instantanswers/6b1037aa-5682-48ed-94d6-e257fcda6a45/fix-connections-to-bluetooth-audio-devices-and-wireless-displays) and try the steps listed there.',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','Bluetooth doesn’t appear in Device Manager after I upgraded from a previous version of Windows to Windows 10. How can I fix this?',
'Bluetooth might not appear in Device Manager if the existing Bluetooth driver isn’t compatible with Windows 10. Try these steps to find a compatible driver:

1. In the search box on the taskbar, type Device Manager, select it from the list of results, and then expand Other devices in Device Manager.

2. Select the unknown device, right click it, and then select Properties.

3. Select the Details tab, and then select Hardware Ids from the Property list.

Look for the hardware ID for the Bluetooth radio. The hardware ID typically looks like this, where {ID} is a series of numbers and/or letters: USB\VID_{ID}&PID_{ID}
4. Right click the hardware ID, and then select Copy.

5. Search on the web for the hardware ID you copied to try find the name of the Bluetooth radio manufacturer. After that, visit the Bluetooth hardware or your PC manufacturer’s website to download a Bluetooth driver that’s compatible with Windows 10.

# Note
If the steps above didn’t help you get Bluetooth working, we’d like to know. To provide feedback, open the Feedback Hub. Select Feedback > Hardware, Devices, and Drivers for the Category > Bluetooth – Setup, Upgrade, Update for the Subcategory > Add new feedback. Explain the problem you’re having. If possible, include the hardware ID from above.',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','I updated my PC to a newer version of Windows 10, and now my Bluetooth device doesn’t work anymore. How can I fix this?',
'If a Bluetooth device uses a customized Bluetooth profile, the device might not work after your PC is updated. You’ll need to [pair the Bluetooth](https://support.microsoft.com/en-us/help/17156/windows-10-connect-to-bluetooth-devices) device again to use it.

Bluetooth devices that use one of the [supported Bluetooth profiles](https://support.microsoft.com/en-us/help/10568/windows-10-supported-bluetooth-profiles) should still be paired and work properly.',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','I don"t know the PIN for an accessory I want to pair with. Where can I find it?',
'Check the documentation for the accessory. (Often, the PIN is "0000" or "1234.") You may also be able to find the PIN on the accessory itself.',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','My Bluetooth device shows as Paired, but it isn’t working. How do I fix this?',
'In Windows 10, the status text for Bluetooth devices changed in Settings  > Devices > Bluetooth. Bluetooth devices will only show as Connected when the device is actually in use (for example, a Bluetooth speaker that’s connected and has music playing over it). When the device isn’t being used, the status text will show as Paired.

If your Bluetooth device isn’t working, you can try removing the device and pairing it again. In Bluetooth settings, select the Bluetooth device that’s paired but not working > Remove device > Yes to verify. After that, pair the device again. For more info about pairing devices, see [Connect to Bluetooth devices](https://support.microsoft.com/en-us/help/17156/windows-10-connect-to-bluetooth-devices).',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','Help… I can’t  send or receive files over Bluetooth',
'If you’re having problems sharing files over Bluetooth, here’s some things to try to fix it:

* Make sure your PC and other device are paired. On your PC, select the Start  button > Settings  > Devices > Bluetooth, and make sure the other device shows as Paired in the list of devices. For more info about pairing devices, see [Connect to Bluetooth devices](https://support.microsoft.com/en-us/help/17156/windows-10-connect-to-bluetooth-devices).

* Windows 10 supports the Bluetooth Object Push Profile (OPP), which it uses when sending and receiving files. Make sure the other device supports the OPP profile too. To see if it does, visit the device manufacturer’s website or search the web. For a list of supported Bluetooth profiles in 
Windows 10, see [Supported Bluetooth profiles](https://support.microsoft.com/en-us/help/10568/windows-10-supported-bluetooth-profiles).

* To receive a file, you need to be on the Waiting for connection screen in Bluetooth File Transfer on your PC. Here’s how to get to it:

1. Select the Start   button > Settings > Devices > Bluetooth > Send or receive files via Bluetooth.

2. In Bluetooth File Transfer, select Receive files.

* When sending and receiving files, make sure both your PC and the other device stay on and don’t go to sleep.',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','My audio quality is low when Bluetooth settings is open. What can I do to try to fix this?',
'If you hear audio glitches or low-quality audio in general when playing music over a Bluetooth speaker, close Bluetooth settings if it’s open. Your PC will no longer be searching for Bluetooth devices, which can cause problems when it’s streaming music at the same time.

You may also hear issues if you’re using Bluetooth for something else at the same time you’re listening to music over it (for example, you’re sharing files over Bluetooth while listening to music over a Bluetooth speaker).',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix Bluetooth problems in Windows 10: FAQ','Music doesn’t play over my Bluetooth speaker. How can I fix this?',
'Your Bluetooth speaker might be paired with your PC but not connected. Here’s how to fix that:

1. Make sure your Bluetooth speaker is turned on.

2. On the far right of the Windows taskbar, right-click the Volume icon, and then select Playback devices.

3. On the Playback tab, select the Bluetooth speaker, press and hold (or right-click) it, and then select Connect.

4. Select your Bluetooth speaker, and then select Set default. Music should play on your Bluetooth speaker now. ',
'https://support.microsoft.com/en-us/help/14169/windows-10-fix-bluetooth-problems'),
(6,'Fix connections to Bluetooth audio devices and wireless displays', '', '
# Bluetooth audio 

If pressing the Connect button in action center doesn’t find your device, here are some things to try:

1. Make sure your Windows device supports Bluetooth and that it"s turned on. You"ll see a Bluetooth button in action center.

2. If you don’t see the Bluetooth button, try updating your device"s driver. Here"s how: Go to Start, enter Device Manager, select it from the list of results. In Device Manager, locate your device, right-click (or press and hold) it, select Update Driver Software, select Search automatically for updated driver software, and then follow the rest of the steps.

3. If Bluetooth is turned on and the driver is up to date, but your device still doesn’t work, try removing the device and re-pairing it. Here"s how: Go to Start, enter Devices, select Bluetooth, select the device, select Remove device, and then try pairing again.

4. Make sure that the Bluetooth-enabled audio device is on and discoverable. How you do this varies with devices, so check the info that came with your device or go to the manufacturer’s website.

# Miracast devices
If pressing the Connect button in action center doesn’t find your device, try the following:
* Make sure your Windows device supports Miracast by checking the info that came with it or by going to the manufacturer’s website.
* Make sure Wi-Fi is turned on.
* Make sure the display you want to project to supports Miracast and that it''s turned on. If it doesn''t, you’ll need a Miracast adapter (sometimes called a dongle) that plugs into an HDMI port.
* Make sure your device drivers are up to date and the latest firmware is installed for your wireless display or adapter (see the Support info on the manufacturer''s website for instructions or search the Windows Store for your manufacturer''s app to help you).
* Restart your PC and the wireless display or adapter.
* Remove the device by going to Start > Settings > Devices > Connected devices, and then, under Projectors, select the wireless display or adapter and tap or click Remove device. Try reconnecting.
# Wigig devices
If pressing the Connect button in action center doesn’t find your device, try the following:
* Make sure your Windows device supports WiGig and is turned on. If your PC supports WiGig, you''ll see a WiGig button in Settings > Airplane mode.
* Make sure the display supports WiGig. If it doesn’t, you’ll need a WiGig dock.
# PCs
If pressing the Connect button in action center doesn’t find the PC you''re trying to connect to, try the following:
* Make sure your Windows device supports Miracast by checking the info that came with it or by going to the manufacturer’s website.
* Make sure the PC you want to project to supports Miracast, is turned on, and is plugged in. To check if it supports Miracast, open the Connect app. Here''s how: Go to Start, enter (type) Connect, and then select Connect from the list of results. The app will let you know if it doesn’t.
* Make sure Wi-Fi is turned on.
* On the PC you are trying to project to, go to Settings > System > Projecting to this PC  and make sure it’s set up to be discovered.
* If you tried all of these and nothing worked, try restarting your PC.
', 'https://support.microsoft.com/en-us/instantanswers/6b1037aa-5682-48ed-94d6-e257fcda6a45/fix-connections-to-bluetooth-audio-devices-and-wireless-displays'),
(6,'Remove a Bluetooth device','','
You might have a Bluetooth device paired with your PC that you want to remove. If you want to connect the device to your PC later, you can pair it again.

* Select Start > Settings > Devices > Bluetooth.

* Select the paired Bluetooth device that you want to remove > Remove device > Yes.
','https://support.microsoft.com/en-us/instantanswers/d1c1ad5f-1746-4a50-ba5d-93c648dcf5a7/remove-a-bluetooth-device'),
(6, 'Project to a screen', '', '
Press the Windows key + P, and then choose a way to project:
* PC screen only
* Duplicate
* Extend
* Second screen only
', 'https://support.microsoft.com/en-us/instantanswers/a8471cec-b731-4923-902e-60b9f9f5c4ef/project-to-a-screen'),
(6, 'Cellular settings in Windows 10', '', '
Some Windows 10 PCs have a SIM card in them that lets you connect to a cellular data network, so you can get online wherever you have a cellular signal. Even if your PC doesn’t have a SIM card, you can still get connected to a cellular network in other ways too, such as by plugging in and using an external cellular device (also called a cellular modem or mobile broadband device). Either way, you’ll need to have a data plan from a mobile operator to connect.

Connect to a cellular data network for the first time

1. Select the Network icon (Wi‑Fi icon or Ethernet icon) in the lower right of the taskbar, and then select the Cellular network  in the list > Connect.

Many times, you’ll see the name of your mobile operator next to the Cellular network  icon.

2. If prompted, type your user name and password and the access point name (APN).

If necessary, check the info that might have come with your PC, SIM card, or cellular device for more information about what settings to use.

# Notes
If the status text under the cellular network name says Mobile operator locked, you"ll need to insert a SIM card from your mobile operator to connect.

If you select the Network icon (Wi‑Fi icon or Ethernet icon) in the taskbar and the Cellular quick action is turned off, select it to turn it on. When it"s off, the cellular radio is turned off, and you can"t connect to a cellular network.

Most of the time you shouldn"t need to change your cellular settings if your cellular data connection is working the way you like. But if you"re having cellular connection problems, changing one or more settings may help. The settings that appear vary by PC model and mobile operator.

# Connect automatically

Determines if your PC will automatically connect to the cellular data network when it’s available. Clear the check box if you want to manually connect each time you want to use your cellular data connection.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Connect automatically. This setting is available when you"re disconnected from the cellular data network, and it"s applied when you select Connect.

# Allow roaming

Determines if your cellular data connection stays on when your PC is outside your mobile operator"s network. Leaving the check box cleared can help prevent data roaming charges.

If you do allow roaming, you can use cellular data when your PC is in a roaming area. Depending on your data plan, you might pay more for data you use when roaming.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Allow roaming. This setting is available when you"re disconnected from the cellular data network, and it"s applied when you select Connect

# Network selection

Appears when roaming and determines which cellular network connection is used. The default setting is Automatic.

If you try to connect to a cellular network and see a message that the selected network isn"t available, you can choose Search for networks, and then select another cellular network.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options.

# Active network

Displays the name of the cellular network that you’re using.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options.

# Update settings

Gets the latest cellular network settings from your mobile operator. Having the latest settings can help keep your cellular data connection working properly.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options > Update settings.

# Add an Internet APN 
The Internet access point name (APN) is the address your PC uses to connect to the Internet when using your cellular data connection. Usually, the Internet APN is set automatically.

If your cellular data connection isn''t working, try entering a new Internet APN based on your location and mobile operator. If you can connect to a Wi‑Fi network on your PC or have a phone handy, try searching online to find the Internet APN settings for your mobile operator.

To add an Internet APN, you must type an address in the APN box. The other settings are optional and depend on your mobile operator.

1. Select the Start  button, then select Settings  > Network & Internet > Cellular > select the cellular connection name > Advanced options > Add an Internet APN.
2. Do one or more of the following:
* In the Profile name box, type a name for the APN profile.
* In the APN box, type the address for the APN to use.
* In the User name box, type the user name for your mobile account.
* In the Password box, type the password for your mobile account.
* Select Type of sign-in info, and then select the authentication method that''s used.
* Select IP type, and then select the type of IP address to use.
3. Select the Apply this profile check box if you want the APN profile to be used right after you save it.
4. Select Save > OK.
5. To go back and view the list of APN profiles you have, select Back, and look under Internet APN. 
# Properties  
This displays information about your SIM and cellular data connection. Select Copy to copy the information to paste into an email or somewhere else. This can be helpful if you’re having connection problems and need to send information to your mobile operator or support person.

To get to this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options.

# Use SIM PIN 
Determines if you want to use a PIN for the SIM in your PC to help prevent other people from using the cellular data connection when they’re not authorized. After you''ve set up your SIM PIN, you''ll be prompted to enter the SIM PIN when you try to connect.

When prompted, type your SIM PIN. If this is the first time using it, type the default SIM PIN. If you don''t know the default SIM PIN, visit your mobile operator''s website to see if they list it there. You''ll need to restart your PC for your cellular data connection to be locked with a SIM PIN.

If you’ve already set up a PIN for the SIM, type your SIM PIN when prompted, and then select OK.

To find this SIM PIN setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options > Use SIM PIN under the Security section.

# Remove SIM PIN  
This appears when you''re using a SIM PIN. If you’re using a SIM PIN and decide you don’t want to use a PIN anymore, select Remove SIM PIN, type your current SIM PIN, and then select OK.

To find this SIM PIN setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options > Remove SIM PIN under the Security section.

# Change SIM PIN  
This appears if you''re using a SIM PIN. To change your SIM PIN if you’re using one, select Change SIM PIN, type your current SIM PIN in the Current SIM PIN box, type a new SIM PIN in the New SIM PIN box, type the same new SIM PIN in the Confirm new SIM PIN box, and then select OK.

To find this setting, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options > Change SIM PIN under the Security section.

# Unblock SIM PIN 
This appears if you''re using a SIM PIN and the incorrect PIN has been entered three times. When this happens, the SIM will be blocked and can''t be used until you unblock it. To unblock it, first you’ll need to contact your mobile operator for the PIN Unblocking Key (PUK). After that, select Unblock SIM PIN, and then type the PUK code. If an incorrect PUK code is entered too many times, your SIM card will be permanently blocked, and you''ll need to get a new SIM card from your mobile operator.

To find this setting if your SIM is blocked, select the Start  button, then select Settings  > Network & Internet > Cellular > the cellular connection name > Advanced options > Unblock SIM PIN under the Security section.
','https://support.microsoft.com/en-us/help/10739/windows-10-cellular-settings'),
(6, 'Use your PC as a mobile hotspot', '', '

Turn your Windows 10 PC into a mobile hotspot by sharing your Internet connection with other devices over Wi-Fi. You can share a Wi-Fi, Ethernet, or cellular data connection. If your PC has a cellular data connection and you share it, it will use data from your data plan.﻿

1. Select the Start button, then select Settings > Network & Internet > Mobile hotspot.

2. For Share my Internet connection from, choose the Internet connection you want to share.

3. Select Edit > enter a new network name and password > Save.

4. Turn on Share my Internet connection with other devices.

5. To connect on the other device, go to the Wi-Fi settings on that device, find your network name, select it, enter the password, and then connect.﻿
', 'https://support.microsoft.com/en-us/instantanswers/c60dcfa3-c596-41d4-8c1a-b0d738e1d9fd/use-your-pc-as-a-mobile-hotspot'),
(6, 'Connect to a VPN in Windows 10','', '
Whether it"s for work or personal use, you can connect to a VPN (virtual private network) on your Windows 10 PC. A VPN connection can help give you a more secure connection to your company"s network and the Internet (for example, when you’re at a coffee shop).

Before you can connect to a VPN, you’ll need to a get a VPN profile on your PC. Here are two ways to get one:

* Create a VPN profile on your own.
* Set up a work account to get a VPN profile from your company.

# Create a VPN profile

If you don"t have a VPN profile on your PC, you"ll need to create one. Before you start:

* If it’s for work, see if you can find the VPN settings and/or a VPN app on your company’s intranet site when you’re at work, or contact your company"s support person.

* It it’s for a VPN service you subscribe to for your own use, visit Windows Store to see if there’s an app for that service, and go to the VPN service’s website to see if the VPN connection settings to use are listed there

1. Select the Start  button, then select Settings  > Network & Internet > VPN > Add a VPN connection.
2. In Add a VPN connection, do the following:
* For VPN provider, choose Windows (built-in).

* In the Connection name box, type a friendly name for the VPN connection profile.
This is the VPN connection name to look for when you go to connect.

* In the Server name or address box, type the address for the VPN server.

* For VPN type, choose the type of VPN connection you want to create.
Again, you’ll need to know which kind of VPN connection your company or VPN service uses.

* For Type of sign-in info, choose the type of sign-in info (also called credentials) to use.
It might be a user name and password, one-time password, certificate, or maybe a smart card if you’re connecting to a VPN for work.

* If you like, enter your user name and password in the respective boxes.
3. Select Save.
4. If you need to edit the VPN connection info or specify additional settings, such as the proxy settings to use for the VPN connection, select the VPN connection > Advanced options.

# Connect to a VPN

After you have a VPN profile, you’re ready to connect.

1. Select the Start  button, then select Settings  > Network & Internet > VPN.

2. Select the VPN connection you want to use > Connect.

3. If prompted, enter your user name and password or other sign-in info.
When you’re connected, the VPN connection name will say Connected underneath.

To quickly check and see if you’re connect to the VPN while you’re doing things on your PC, select the Network  icon on the far right of the taskbar, then see if the VPN connection says Connected underneath it.
','https://support.microsoft.com/en-us/help/20510/windows-10-connect-to-vpn');