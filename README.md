# SimpleList Example App

This app can be run to demonstrate the progress of the new SimpleListControl. It gives you
a grid that you can "reconfigure" in real-time via some buttons at the top.

## Installation

1. Put this app in your workspace.
2. Check out the `mg-lists` branch on ividev.
3. Run `npm install` in ividev.
4. Run `npm run build-sdk` in ividev.
5. Let 'er rip.

## Caveats

* All the CSS is currently in this app. That will of course get moved to the framework and profile as appropriate.
* This has not yet been tested in O2 and Carbon. Should work fine? If not, try Oxygen.

## TODO

* Touch events are not yet working
* Scrollbar and "page dots" control
* ListControl subclass that will add data chunking (lazy-loading) and integration with scrollbars
* ListChamber
* Profile CSS implementations
* Refactoring legacy controls to use this component
* Cucumber coverage
