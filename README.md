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
│
├── images/
│ └── icon.png # Extension icon
│
├── content/
│ └── content.js # Content script
│
└── manifest.json # Extension manifest file


## Usage

Once installed:

- The extension automatically scans each visited website.
- If the RTA meta tag is found, an overlay appears with a warning message.
- Choose to continue on the site ("Yes") or be redirected to Google ("No").

## Testing

### Test Scenario: Visiting an Adult Content Site

1. Navigate to a known adult content site (e.g., `www.xvideos.com`).
2. Upon loading, the extension should detect the RTA meta tag.
3. An overlay with the warning message should appear.
4. Test both options:
   - Clicking "Yes" should allow you to continue on the site.
   - Clicking "No" should redirect you to `www.google.com`.

Please note: This test is provided for demonstration purposes and should be conducted in a controlled, private, and appropriate environment.

## Contributing

Feel free to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. 





