
insert into dbo.help(category_id,question,sub_question,answer,link) values
(11,'Recovery options in Windows 10','Get started',
'If you"re having problems with your PC, the following table can help you decide which recovery option to use.
# Your PC isn"t working well because of a recently installed app, driver, or update.
Restore from a system restore point.
# Your PC isn"t working well and you"re not sure why.
Reset your PC.
# You want to clear all your personal data off of your PC before you donate or recycle it.
Reset this PC > Remove everything > Remove files and clean this drive.
# Your PC won"t start.
* If you’ve previously created a USB recovery drive

Use a recovery drive to restore or recover your PC
* If you haven"t created a USB recovery drive

Use installation media to restore your PC 

Use installation media to reinstall Windows 10 PC
# You recently updated to the latest version of Windows 10, and you want to go back to your previous version of Windows.
Go back to an earlier build',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Recovery options in Windows 10','Restore from a system restore point','
This option takes your PC back to an earlier point in time, called a system restore point. Restore points are generated when you install a new app, driver, or Windows update, and when you [create a restore point manually](http://go.microsoft.com/fwlink/p/?LinkId=615477). Restoring won"t affect your personal files, but it will remove apps, drivers, and updates installed after the restore point was made.

1. Right-click (or press and hold) the Start button, and then select Control Panel.
2. Search Control Panel for Recovery.
3. Select Recovery > Open System Restore > Next.
4. Choose the restore point related to the problematic app, driver, or update, and then select Next > Finish.

# Note
If you’re not seeing any restore points, it might be because system protection isn’t turned on. 
To check, go to the Control Panel, search for Recovery, and then select Recovery > Configure System Restore > Configure and make sure Turn on system protection is selected.',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'
),
(11,'Recovery options in Windows 10','Reset this PC',
'Resetting lets you choose whether to keep your files or remove them, and then reinstalls Windows. To get started, go to Settings > Update & security > Reset this PC > Get started and choose an option.

# Note
If you can"t open Settings, you can get to reset by restarting your PC from the sign-in screen. Press the Windows logo key Windows logo key  +L to get to the sign-in screen, then hold the Shift key down while you select Power  > Restart in the lower-right corner of the screen. After your PC restarts, select Troubleshoot > Reset this PC.

# Keep my files
* Reinstalls Windows 10 and keeps your personal files.
* Removes apps and drivers you installed.
* Removes changes you made to settings.
* Removes any apps your PC manufacturer installed. (If your PC came with Windows 10, apps from your PC manufacturer will be reinstalled.)

# Remove everything
* Reinstalls Windows 10 and removes all your personal files.
* Removes apps and drivers you installed.
* Removes changes you made to settings.
* Removes any apps your PC manufacturer installed. (If your PC came with Windows 10, apps from your PC manufacturer will be reinstalled.)
If you"re planning to donate, recycle, or sell your PC, use this option and choose to fully clean the drive. This might take an hour or two, but it makes it harder for other people to recover files you"ve removed.

# Restore factory settings
* Reinstalls the version of Windows that your PC came with (either Windows 8 or Windows 8.1) and removes your personal files.
* Removes apps and drivers you installed.
* Removes changes you made to settings.
* Reinstalls any apps your PC manufacturer installed on your PC.
* This option isn"t available on all PCs.

# Note
If you reset your PC within 10 days of your upgrade to Windows 10, the option in Settings that lets you go back to your previous version of Windows will no longer be available.
',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Recovery options in Windows 10','Use a recovery drive to restore or recover your PC','
If your PC won’t start, you can use a recovery drive to restore from a system restore point or reset your PC. For info on how to create a recovery drive on a working PC, see Create a recovery drive.

If you"re using a recovery drive created on Windows 10:

1. Connect the recovery drive and turn on your PC.
2. On the Choose an option screen, select Troubleshoot, and then select an option. If you don’t see the Choose your option screen, your PC might not be set up to boot from a drive. Check your PC manufacturer’s website for info on how to change your PC’s boot order.
* Restore from a system restore point by selecting Advanced Options > System Restore. This will remove recently installed apps, drivers, and updates that might be causing your PC problems, but it won’t affect your personal files.
* You can also Recover from a drive. This will reinstall Windows 10 (unless your PC came with Windows 8/8.1 and a recovery partition from your PC manufacturer, in which case it"ll reinstall the version of Windows that came with your PC). It"ll also remove your personal files, apps and drivers you installed, and changes you made to settings.

# Note
If you chose not to back up system files when you created your recovery drive, Recover from a drive won''t be available.
','https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Recovery options in Windows 10','Use installation media to restore your PC','
If your PC won"t start and you haven"t created a recovery drive, download installation media and use it to restore from a system restore point.

1. On a working PC, go to the [Microsoft software download website](http://go.microsoft.com/fwlink/p/?LinkID=616447).
2. Download the media creation tool and then run it.
3. Select Create installation media for another PC.
4. Choose a language, edition, and architecture (64-bit or 32-bit).
5. Follow the steps to create installation media, and then select Finish.
6. Connect the installation media you created to your nonfunctional PC, and then turn it on.
7. On the initial setup screen, enter your language and other preferences, and then select Next. If you"re not seeing the setup screen, your PC might not be set up to boot from a drive. Check your PC manufacturer"s website for info on how to change your PC"s boot order, and then try again.
8. Select Repair your computer. On the Choose an option screen, select Troubleshoot > Advanced options > System Restore.

This will remove recently installed apps, drivers, and updates that might be causing your PC problems. Restoring from a restore point won’t affect your personal files.',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Recovery options in Windows 10','Use installation media to reinstall Windows 10',
'Before you follow these steps, try resetting your PC using installation media. If that doesn"t work, you can use the same installation media to reinstall Windows 10 (also called performing a clean installation of Windows).

# Warning
This will remove all your personal files, apps and drivers you installed, apps and customizations from your PC manufacturer, and changes you made to settings.
1. On a working PC, go to the [Microsoft software download website](http://go.microsoft.com/fwlink/p/?LinkID=616447).
2. Download the media creation tool and then run it.
3. Select Create installation media for another PC.
4. Choose a language, edition, and architecture (64-bit or 32-bit).
5. Follow the steps to create installation media, and then select Finish.
6. Connect the installation media you created to your non-functional PC, and then turn it on.
7. On the initial setup screen, enter your language and other preferences, and then select Next. If you"re not seeing the setup screen, your PC might not be set up to boot from a drive. Check your PC manufacturer"s website for info on how to change your PC"s boot order, and then try again.
8. Select Install now.
9. On the Enter the product key to activate Windows page, enter a product key if you have one. If you upgraded to Windows 10 for free or bought and activated Windows 10 from the Windows Store, select Skip and Windows will automatically activate later. For more details, see [Activation in Windows](https://support.microsoft.com/en-us/help/12440)
10. On the License terms page, select I accept the license terms (if you agree to them), then select Next.
11. On the Which type of installation do you want? page, select Custom.
12. On the Where do you want to install Windows? page, select a partition, select a formatting option (if necessary), and then follow the instructions.
13. When you"ve finished formatting, select Next.
14. Follow the rest of the setup instructions to finish installing Windows 10.',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Recovery options in Windows 10',
'Go back to your previous version of Windows',
'You"ll be able to go back to an earlier version by going to Settings  > Update & security  > Recovery  The time you have to go back depends on what version of Windows 10 your PC is running after the upgrade. For example, if your PC is running Windows 10 Version 1511, you have a month to go back to your previous operating system. If your PC is running the Windows 10 Anniversary Update (Version 1607), you have 10 days to go back. (To see what version of Windows 10 your PC is running after you upgrade, select the Start  button, then select Settings ﻿ > System  > About )

# To go back, you"ll need to:

* Keep everything in the windows.old and $windows.~bt folders after the upgrade.
* Remove any user accounts you added after the upgrade.
* Know the password you used to sign in to Windows 7 or Windows 8.1 (if you used one).
* Have the USB drive you used to upgrade to Windows 10 (if you used one).

# Note
If you go back to Windows 8.1, some apps that came with Windows, like Mail and People, might not work anymore. To fix them, reinstall them from the Store.

# If go back isn"t available
* Check to see if you can restore your PC to factory settings. This will reinstall the version of Windows that came with your PC and remove personal files, apps and drivers you installed, and any changes you made to settings. Go to Settings > Update & security > Recovery > Reset this PC > Get started and look for Restore factory settings.
* If you have a product key for your previous version of Windows, use the media creation tool to create installation media for [Windows 8.1](http://go.microsoft.com/fwlink/p/?LinkID=616948) or [Windows 7](http://go.microsoft.com/fwlink/p/?LinkID=616947), and use it to do a clean install.

# Info for Windows Insiders
If you’re an Insider and the current preview build isn’t working for you, go to Settings > Update & security > Recovery > Go back to an earlier build. This won’t remove your personal files, but it’ll remove recently installed apps and drivers, and change settings back to their defaults.

Going back to an earlier build won’t remove you from the Insider Program. When the next preview build is ready, it"ll be installed on your PC.
',
'https://support.microsoft.com/en-us/help/12415/windows-10-recovery-options'),
(11,'Free up drive space in Windows 10','',
'If your PC is running low on storage, here are a few ways to free up some drive space.
# Delete temporary files

These files used to help your apps load and run faster, but they"re not being used anymore. To delete them:
1. Open the Start menu and select Settings > System > Storage. 
2. Under Storage, select This PC > Temporary files. 
3. Under Temporary files, select Delete temporary files > Yes, I"m sure. 

# Delete downloaded files

Every time you download something from the web, a copy of the file is saved in your Downloads folder. To see what"s in Downloads and remove what you don"t need:
1. Open the Start menu and select Settings > System > Storage. 
2. Under Storage, select This PC > Temporary files. 
3. Under Downloads, select View downloads. 

# Empty your recycle bin

When you delete a file, it usually just goes to the recycle bin. To permanently delete the files in your recycle bin:
1. Open the Start menu and select Settings > System > Storage. 
2. Under Storage, select This PC > Temporary files. 
3. Under Recycle bin, select Empty recycle bin > Yes, I"m sure. 

Tip: To see what"s in your recycle bin before you empty it, open it from your desktop.

# Uninstall apps you don"t use anymore

1. Open the Start menu and select Settings > System > Apps & features. 
2. Search for a specific app or sort them to see which ones are taking up the most space. 
3. When you find an app you want to delete, select it from the list and select Uninstall.  

# Move files to another drive

If you have photos, music, or other files that you want to keep but don"t use very often, consider saving them to removable media, like a USB drive. You"ll still be able to use them when the drive is connected, but they won"t take up space on your PC. 
1. Connect the removable media to your PC.
2. Open File Explorer from the taskbar and find the files you want to move. 
3. Select the files, go to the Home tab, and then select Move to > Choose location. 
4. Select your removable media from the location list, and then select Move. 

# Save new files to another drive

Instead of saving all your new files to the same drive, save some of them to a different drive.
1. Open the Start menu and select Settings > System > Storage. 
2. Under Save locations, select a drive from the dropdown menu. If the drive you want to use isn"t listed there, make sure it"s connected to your PC.  

# Save fewer OneDrive files on your PC

It"s handy to have your OneDrive files saved offline so you can use them when you"re not connected to the Internet. But if you"re running low on drive space, try saving fewer OneDrive folders offline. You"ll still be able to get to them from OneDrive.com, but they won"t take up space on your PC. 
1. Go to the right side of the taskbar and find the OneDrive icon. If you don"t see it, select the Show hidden icons arrow and see if it"s there. 
2. Right-click the OneDrive icon and select Settings > Choose folders > Choose folders. 
3. Clear the check boxes for folders you don"t want saved on your PC, and then select OK.      
',
'https://support.microsoft.com/en-us/help/12425/windows-10-free-up-drive-space'),
(11,'Back up and restore your files','',
'It"s always good to have a backup. Keep copies of your files on another drive in case something happens to the originals.
# Set up your backup

Select the Start​ button, select Settings  > Update & security > Backup > Add a drive, and then choose an external drive or network location for your backups.

All set.Every hour, we"ll back up everything in your user folder (C:\Users\username). To change which files get backed up or how often backups happen, go to More options.
# Restore your files
If you''re missing an important file or folder, here''s how to get it back:

1. Type Restore files in the search box on the taskbar, and then select Restore your files with File History.

2. Look for the file you need, then use the arrows to see all its versions.

3. When you find the version you want, select Restore to save it in its original location. To save it in a different place, press and hold (or right-click) Restore, select Restore to, and then choose a new location.
',
'https://support.microsoft.com/en-us/help/17143/windows-10-back-up-your-files'),
(11,'Start your PC in safe mode in Windows 10','',
'Safe mode starts Windows in a basic state, using a limited set of files and drivers. It can help you troubleshoot problems on your PC. For example, if the problem doesn"t happen in safe mode, you"ll know default settings and basic device drivers aren"t causing the issue.

There are two versions of safe mode: Safe Mode and Safe Mode with Networking. They"re quite similar, but Safe Mode with Networking includes the network drivers and services you"ll need to access the Internet and other computers on your network.

The following sections describe how to start your PC in safe mode.  
# From Settings

1. Press Windows logo key Windows logo key  + I on your keyboard to open Settings. If that doesn"t work, select the Start button in the lower-left corner of your screen, then select Settings.
2. Select Update & security > Recovery.
3. Under Advanced startup, select Restart now.
4. After your PC restarts to the Choose an option screen, select Troubleshoot > Advanced options > Startup Settings > Restart.
5. After your PC restarts, you"ll see a list of options. Select 4 or F4 to start your PC in Safe Mode. Or if you"ll need to use the Internet, select 5 or F5 for Safe Mode with Networking.

# From the sign-in screen

1. Restart your PC. When you get to the sign-in screen, hold the Shift key down while you select Power > Restart.
2. After your PC restarts to the Choose an option screen, select Troubleshoot > Advanced options > Startup Settings > Restart.
3. After your PC restarts, you"ll see a list of options. Select 4 or F4 to start your PC in Safe Mode. Or if you"ll need to use the Internet, select 5 or F5 for Safe Mode with Networking.',
'https://support.microsoft.com/en-us/help/12376/windows-10-start-your-pc-in-safe-mode'),
(11,'Create a recovery drive','',
'A recovery drive can help you troubleshoot and fix problems with your PC, even if it won’t start. To create one, all you need is a USB drive.
1. From the taskbar, search for Create a recovery drive and then select it. You might be asked to enter an admin password or confirm your choice.
2. When the tool opens, make sure Back up system files to the recovery drive is selected and then select Next.
3. Connect a USB drive to your PC, select it, and then select Next > Create. A lot of files need to be copied to the recovery drive, so this might take a while.
4. When it’s done, you might see a Delete the recovery partition from your PC link on the final screen. If you want to free up drive space on your PC, select the link and then select Delete. If not, select Finish.',
'https://support.microsoft.com/en-us/instantanswers/3a747883-b706-43a5-a286-9e98f886d490/create-a-recovery-drive'),
(11,'Create a system restore point','',
'1. Search for Create a restore point from the taskbar and select it from the list of results.
2. On the System Protection tab in System Properties, select Create. 
3. Enter a description for the restore point, and then select Create > OK.
',
'https://support.microsoft.com/en-us/instantanswers/e6bbddb0-9db4-4d88-9063-42c52c79a96e/create-a-system-restore-point'),
(11,'Get to safe mode and other startup settings in Windows 10','',
'# From Settings

To start Windows in safe mode or get to other startup settings:
1. Select the Start button, then choose Settings.
2. Select Update & security > Recovery.
3. Under Advanced startup select Restart now.
4. After your PC restarts to the Choose an option screen, select Troubleshoot > Advanced options > Startup Settings > Restart.
5. After your PC restarts, select a startup setting by pressing the corresponding number.

# From sign-in screen

If you can''t open Settings, get to startup options from the sign-in screen:
1. On the sign-in screen, hold the Shift key down while you select Power > Restart (in the lower-right corner of the screen).
2. After your PC restarts to the Choose an option screen, select Troubleshoot > Advanced options > Startup Settings > Restart.
3. After your PC restarts, select a startup setting from the list of options by pressing the corresponding number on your keyboard.
',
'https://support.microsoft.com/en-us/instantanswers/f40a95aa-1e34-4907-98ba-a308fd10a786/get-to-safe-mode-and-other-startup-settings-in-windows-10'),
(11,'Troubleshoot screen flickering in Windows 10','',
'Screen flickering in Windows 10 is usually caused by incompatible apps or display drivers. To determine whether an app or driver is causing the problem, check to see if Task Manager flickers. Then, based on that information, you"ll need to either uninstall the app or update the display driver.

# Check to see if Task Manager flickers
Open Task Manager by pressing the Ctrl+Shift+Esc keys on the keyboard at the same time. If that doesn"t work, right-click the Start  button in the lower-left corner of your screen and then select Task Manager. 
* If Task Manager doesn"t flicker, an app is probably causing the problem.
* If Task Manager does flicker, a display driver is probably causing the problem.
# Uninstall an incompatible app
There are three apps that are known to cause screen flickering in Windows 10: Norton AV, iCloud, and IDT Audio. In most cases, uninstalling these apps will fix the problem. If you have any of these apps installed, use one of these methods to uninstall them.

Method 1: Uninstall from Settings 
1. Open the Settings app by pressing the Windows logo key +I on your keyboard. If that doesn"t work, select the Start  button in the lower-left corner of your screen and then select Settings.
2. From Settings, select System > Apps & features. It"ll take a moment for your apps to appear.
3. Scroll down the list and find the app you want to uninstall. Select the app, and then select Uninstall > Uninstall. If you"re asked to confirm your choice in a User access control window, select Yes. The app might uninstall on its own, or it might open a separate uninstaller where you"ll have to take additional steps to remove it.

Method 2: Uninstall from the Start menu 
1. Open the Start menu by pressing the Windows logo key  on your keyboard (or selecting the Start  button in the lower-left corner of your screen).
2. From the Start menu, select All apps.
3. Scroll down the list and find the app you want to uninstall. Right-click the app, and then select Uninstall. If you"re asked to confirm your choice in a User access control window, select Yes. The app might uninstall on its own, or it might open a separate uninstaller where you"ll have to take additional steps to remove it.

Note: If you want to keep using Norton AV, iCloud, or IDT Audio in Windows 10, go to the app manufacturer"s website for more info on app updates and Windows 10 compatibility.

# Update your display driver
To update your display driver, you"ll need to start your PC in safe mode, uninstall your current display adapter, and then check for driver updates. 
1. [Start your PC in safe mode](https://support.microsoft.com/en-us/help/12376), then right-click the Start  button and select Device Manager.
2. Expand the Display adapters section, right-click the listed adapter, then select Uninstall. Select the Delete the driver software for this device check box, then select OK and restart your PC.
3. After your PC restarts, press the Windows logo key  + I on your keyboard to open Settings. If that doesn"t work, select the Start  button and then select Settings.
4. From Settings, select Update & security > Windows Update > Check for updates.

Note: If you have multiple display adapters, you"ll need to disable the added adapter (often an Intel HD 400 or AMD Radeon HD 4200) by right-clicking it from the list in Device Manager and selecting Disable > Yes. Then, turn off your PC, disconnect installation or recovery media (if you"re using it), and turn your PC back on. If that doesn"t fix the flickering, restart your PC in safe mode, re-enable the added display adapter, and then disable the other adapter.',
'https://support.microsoft.com/en-us/help/12374/windows-10-troubleshoot-screen-flickering'),
(11,'Backup and Restore in Windows 10','',
'If you used Backup and Restore to back up files or create system image backups in previous versions of Windows, your old backup is still available in Windows 10. To get to it, right-click the Start button, and then select Control Panel > Backup and Restore (Windows 7).',
'https://support.microsoft.com/en-us/instantanswers/62ed802d-7c8d-35d9-9b82-6cace4b08185/backup-and-restore-in-windows-10'),
(11,'Get help with PC problems','',
'Get help with computer problems—or help someone else—with Quick Assist. The Quick Assist app in Windows 10 enables two people to share a computer over a remote connection so that one person can help solve problems on the other person’s computer.
Here’s how it works: The person who needs help gets a code from a designated helper and then uses that code to give permission to the helper. The helper can then take control of that person’s computer and help out.
Note: Only give control of your computer to someone you trust.

# To get help
1. Select the Start Start symbol button > Windows Accessories > Quick Assist.
2. Select Get assistance, and then follow the instructions.
3. If User Account Control appears, select Yes to continue.
4. Wait for the connection to complete.

# To help someone else
1. Select the Start Start symbol button > Windows Accessories > Quick Assist.
2. Select Give assistance, and then follow the instructions.',
'https://support.microsoft.com/en-us/help/27919/windows-10-get-help-with-pc-problems'),
(11,'Find my BitLocker recovery key','',
'# Places to look for your BitLocker key:
* On a printout you saved. Look in places you keep important papers.
* Saved on a USB flash drive. Plug the USB flash drive in to your locked PC and follow the instructions. If you saved the key as a text file on the flash drive, use a different computer to read the text file.
* In your Microsoft account. To get your recovery key, go to [BitLocker Recovery Keys](http://go.microsoft.com/fwlink/p/?LinkId=237614).

# Or ask someone for help:
* Ask someone with administrator privileges on the same PC to unlock it with their key.
* If your PC is connected to a domain (usually a work or school computer), ask a system administrator for your recovery key.
If you still can"t get in, you"ll need to reset your PC. [Learn how](http://go.microsoft.com/fwlink/?LinkID=723204).',
'https://support.microsoft.com/en-us/instantanswers/566e0e4e-4ca7-4df2-88fb-aa71c00ea55e/find-my-bitlocker-recovery-key'),
(11,'Find out how much storage your PC has','',
'1. Select the Start button, and then select Settings.
2. Select System  > Storage.',
'https://support.microsoft.com/en-us/instantanswers/08501f80-dd20-483a-b29a-f9bfc862b12d/find-out-how-much-storage-your-pc-has'),
(11,'Troubleshoot black screen problems','',
'If your PC experiences a black screen after upgrading to Windows 10, here are some troubleshooting steps you can try.(Please view it on web)',
'https://support.microsoft.com/en-us/help/14106/windows-10-troubleshoot-black-screen-problems'),
(11,'Troubleshoot blue screen errors','',
'A blue screen error (also called a stop error) can occur if a problem causes your PC to shut down or restart unexpectedly. When you experience this type of error, you won’t be able to see things like the Start menu or the taskbar on the screen when your PC is turned on. Instead you might see a blue screen with a message that your PC ran into a problem and needs to restart.(Please view it on web for more infomations)',
'https://support.microsoft.com/en-us/help/14238/windows-10-troubleshoot-blue-screen-errors');

