# Adult Content Warning Extension

## Overview

This Chrome extension detects adult content on websites based on the RTA (Restricted to Adults) meta tag. It displays an overlay with a warning message and gives users the choice to either continue viewing the page or be redirected to Google.

## Features

- **Content Detection:** Scans for the RTA meta tag to detect adult content.
- **User Decision:** Offers a choice to proceed with the site or be redirected to Google.
- **Simple Interface:** Clear overlay with "Yes" and "No" options.

## Installation

To install this extension:

1. Clone or download the extension files from this repository.
2. Open Chrome and navigate to `chrome://extensions/`. (soon)
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the downloaded extension directory.
5. The extension should now be active in Chrome.

## File Structure

adult-content-warning-extension/


├── images/

│   └── icon.png         # Extension icon

├── content/

│   └── content.js       # Content script

└── manifest.json        # Extension manifest file



## Usage

Once installed:

- The extension automatically scans each visited website.
- If the RTA meta tag is found, an overlay appears with a warning message.
- Choose to continue on the site ("Yes") or be redirected to Google ("No").

## Testing

### Test Scenario: Visiting an Adult Content Site

1. Navigate to a known adult content site e.g. [🏴‍☠️ xvideos.com](https://www.xvideos.com)
2. Upon loading, the extension should detect the RTA meta tag.
3. An overlay with the warning message should appear.
4. Test both options:
   - Clicking "Yes" should allow you to continue on the site.
   - Clicking "No" should redirect you to `www.google.com`.

Please note: This test is provided for demonstration purposes and should be conducted in a controlled, private, and appropriate environment.

## Limitations and Future Improvements

### Current Limitations

While the extension is effective in detecting adult content on websites that use the RTA (Restricted to Adults) meta tag, it has certain limitations:

- **Non-RTA Tagged Sites:** Some adult websites may not use the RTA meta tag. For instance, sites like `[noodlemagazine.com](https://noodlemagazine.com/new-video)` and `[xdosse.com](https://xdosse.com/)`, despite containing adult content, do not have this tag. Consequently, the extension will not identify these sites as adult content providers, leading to a potential under-filtering issue.
- **Reliance on Meta Tags:** The extension's current method relies solely on the presence of meta tags, which is not a comprehensive approach to content detection. Websites can contain adult content without necessarily using the RTA tag or similar identifiers.

### Planned Improvements

To address these limitations, the following improvements are planned for future versions of the extension:

- **Advanced Page Analysis:** Implementing a more sophisticated content analysis system, possibly using AI or machine learning algorithms, to detect adult content based on site characteristics beyond just meta tags.
- **User Feedback System:** Introducing a feature where users can report a site that contains adult content but is not detected by the extension. This feedback can be used to improve the detection algorithm.
- **Custom Blacklist/Whitelist:** Allowing users to manually add websites to a blacklist (to be blocked) or a whitelist (to be allowed), providing more control over the content filtering process.


## License

Distributed under the MIT License. 





