## d872fb7 - 2025-12-12 19:57:42
### Refactor ROI breakdown and update dependencies
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-12-12 19:57:42

Refactored the ROI breakdown component and updated ROI math logic. Added new dependencies including @radix-ui/react-select, motion, and recharts to support new features and visualizations.

---
 package-lock.json                | 998 +++++++++++++++++++++++++++++++++++++--
 public/feed.xml                  |   4 +-
 public/wp-search.json            |   2 +-
 src/components/Roi/BreakDown.jsx |  13 +-
 src/lib/roi-math.js              |   2 +-
 5 files changed, 977 insertions(+), 42 deletions(-)

## 230b0d4 - 2025-12-12 11:07:10
### Add currency data module and update ROI components
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-12-12 11:07:10

Introduced a new currency-data.js library for handling currency information. Updated MicroConversionModal, Roi/BreakDown, and Roi/Hero components to utilize the new currency data. Also updated feed.xml and wp-search.json with the latest content and metadata.

---
 public/feed.xml                               |  4 +-
 public/wp-search.json                         |  2 +-
 src/components/MicroConversionModal/index.jsx | 75 ++++++++++++++++++++-------
 src/components/Roi/BreakDown.jsx              | 39 +++++++++-----
 src/components/Roi/Hero.jsx                   |  8 +--
 src/lib/currency-data.js                      | 14 +++++
 6 files changed, 104 insertions(+), 38 deletions(-)

## 4db5110 - 2025-12-11 19:00:16
### Update feed dates and Hero component in ROI
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-12-11 19:00:16

Updated the RSS feed and publication dates in feed.xml and wp-search.json. Modified src/components/Roi/Hero.jsx, likely for content or logic changes in the ROI Hero section.

---
 public/feed.xml             | 4 ++--
 public/wp-search.json       | 2 +-
 src/components/Roi/Hero.jsx | 8 ++++----
 3 files changed, 7 insertions(+), 7 deletions(-)

## 1ad3c9f - 2025-12-11 18:40:55
### Refactor and rename BreakDownCard to RoiBreakDownCards
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-12-11 18:40:55

Renamed BreakDownCard.jsx to RoiBreakDownCards.jsx and updated references in BreakDown.jsx to use the new component name. Also updated feed.xml and wp-search.json with new build and generated timestamps.

---
 public/feed.xml                                                 | 4 ++--
 public/wp-search.json                                           | 2 +-
 src/components/Roi/BreakDown.jsx                                | 4 ++--
 src/components/Roi/{BreakDownCard.jsx => RoiBreakDownCards.jsx} | 4 ++--
 4 files changed, 7 insertions(+), 7 deletions(-)

## 100358e - 2025-12-11 18:29:45
### Update blog feed and search index with new articles
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-12-11 18:29:45

Added new blog posts to public/feed.xml and public/wp-search.json, updated publication dates, and removed outdated entries. These changes ensure the latest articles are available in the RSS feed and search index.

---
 public/feed.xml                      | 79 +++++++++++++++++++++++++++---------
 public/wp-search.json                |  2 +-
 src/components/Roi/BreakDown.jsx     |  4 +-
 src/components/Roi/BreakDownCard.jsx |  4 +-
 src/pages/roi-calculater.js          |  2 +-
 5 files changed, 65 insertions(+), 26 deletions(-)

## 967393b - 2025-12-11 17:54:16
### Add ROI calculator and webinar assets
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-12-11 17:54:16

Introduces new ROI calculator components, supporting UI elements, and related SVG assets. Adds multiple webinar images and updates community and ROI pages to integrate these features. Also updates dependencies and enforces MTA-STS mode.

---
 package.json                                       |   3 +
 public/.well-known/mta-sts.txt                     |   2 +-
 public/assets/community/how-to-webinar-20-nov.png  | Bin 0 -> 19836 bytes
 public/assets/community/how-to-webinar-25-sept.png | Bin 0 -> 9167 bytes
 public/assets/community/how-to-webinar-25.png      | Bin 0 -> 74832 bytes
 public/assets/community/how-to-webinar-28-oct.avif | Bin 0 -> 6212 bytes
 public/assets/community/how-to-webinar-28-oct.png  | Bin 0 -> 37565 bytes
 public/assets/community/how-to-webinar-9-oct.avif  | Bin 0 -> 6800 bytes
 public/assets/community/how-to-webinar-9-oct.png   | Bin 0 -> 17177 bytes
 .../assets/community/how-to-webinar-thumbnail.avif | Bin 0 -> 9387 bytes
 .../assets/community/how-to-webinar-thumbnail.png  | Bin 0 -> 62837 bytes
 public/assets/community/upcoming-webinar-9-oct.png | Bin 0 -> 183049 bytes
 public/assets/community/upcoming-webinar-new.png   | Bin 0 -> 203248 bytes
 .../assets/community/webinar-thumbnail-18-dec.png  | Bin 0 -> 191699 bytes
 .../assets/community/webinar-thumbnail-20-nov.png  | Bin 0 -> 195139 bytes
 .../assets/community/webinar-thumbnail-4-dec.png   | Bin 0 -> 185185 bytes
 .../assets/community/webinar-thumbnail-6-nov.png   | Bin 0 -> 183455 bytes
 public/assets/roi/churn-rate.svg                   |   5 +
 public/assets/roi/compiliance.svg                  |   3 +
 public/assets/roi/currency.svg                     |   7 +
 public/assets/roi/no-employees.svg                 |   3 +
 src/components/Header/DesktopNavigation.js         |  23 +-
 src/components/Header/Navbar.jsx                   | 427 +++++++++++++++++++++
 src/components/Header/index.js                     | 131 ++++---
 src/components/Layout/index.jsx                    |   3 +
 src/components/MicroConversionModal/index.jsx      | 104 +++++
 .../PageComponents/CommunityPage/Features.jsx      |   6 +-
 .../PageComponents/CommunityPage/JoinCommunity.jsx | 215 ++++++-----
 .../CommunityPage/UpcomingWebinars.jsx             |  93 +++--
 .../PageComponents/CommunityPage/Webinars.jsx      |  57 ++-
 src/components/Roi/BreakDown.jsx                   | 218 +++++++++++
 src/components/Roi/BreakDownCard.jsx               |  49 +++
 src/components/Roi/Hero.jsx                        | 376 ++++++++++++++++++
 src/components/Roi/roi-calculator.html             | 300 +++++++++++++++
 src/components/ui/card.jsx                         |  53 +++
 src/components/ui/chart.jsx                        | 313 +++++++++++++++
 src/components/ui/dialog.jsx                       |  10 +-
 src/components/ui/input.jsx                        |   2 +-
 src/components/ui/navbar-menu.jsx                  |  94 +++++
 src/components/ui/select.jsx                       | 120 ++++++
 src/lib/roi-math.js                                |  57 +++
 src/pages/email-signature-management.js            |   8 +-
 src/pages/features.js                              |   4 +-
 src/pages/google-contact-sharing.js                |   4 +-
 src/pages/google-drive-compliance.js               |   4 +-
 src/pages/google-drive-management.js               |   4 +-
 src/pages/google-workspace-backup.js               |   4 +-
 src/pages/google-workspace-community.js            |  98 ++---
 src/pages/index.js                                 |   4 +-
 src/pages/on-boarding.js                           |   4 +-
 src/pages/organisational-chart.js                  |   4 +-
 src/pages/roi-calculater.js                        | 108 ++++++
 src/pages/security-and-compliance.js               |   4 +-
 src/styles/globals.css                             |   2 +-
 54 files changed, 2605 insertions(+), 321 deletions(-)

## 1d3076e - 2025-09-10 18:33:23
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-10 18:33:23

Testimonials-content

---
 public/assets/community/adrian-warren.png          | Bin 0 -> 164741 bytes
 public/assets/community/kevin-mcgrail.png          | Bin 0 -> 163733 bytes
 public/assets/community/mikael-klambro.png         | Bin 0 -> 272456 bytes
 public/assets/community/paul-barnes.png            | Bin 0 -> 66832 bytes
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 src/components/Header/DesktopNavigation.js         |   2 +-
 src/components/Header/MobileNavigation.js          |   2 +-
 .../CommunityPage/Testimonial/Slider.js            | 100 +++++++++++++++++++++
 .../CommunityPage/Testimonial/index.js             |  64 +++++++++++++
 src/pages/google-workspace-community.js            |   2 +-
 11 files changed, 170 insertions(+), 6 deletions(-)

## ceb7c09 - 2025-09-10 16:34:04
### update-[vidushi]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-10 16:34:04

Update TMDs for google workspace community page

---
 public/assets/seo/google-workspace-community.png | Bin 0 -> 728659 bytes
 public/feed.xml                                  |   4 ++--
 public/wp-search.json                            |   2 +-
 src/pages/google-workspace-community.js          |  10 ++++++++++
 4 files changed, 13 insertions(+), 3 deletions(-)

## bf951f2 - 2025-09-10 16:05:28
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-10 16:05:28


---
 public/feed.xml                                               | 4 ++--
 public/wp-search.json                                         | 2 +-
 src/components/PageComponents/CommunityPage/JoinCommunity.jsx | 4 ++--
 3 files changed, 5 insertions(+), 5 deletions(-)

## 3943eef - 2025-09-10 15:58:53
### Update community page features and webinar assets
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-09-10 15:58:53

Refreshed the upcoming webinar image and updated several components on the CommunityPage, including Features, Group, UpcomingWebinars, and Webinars. Also updated FAQ data and feed/search JSON files to reflect recent content and metadata changes.

---
 public/assets/community/upcoming-webinar.png       | Bin 183276 -> 183402 bytes
 public/feed.xml                                    |   4 ++--
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/Features.jsx      |   2 +-
 .../PageComponents/CommunityPage/Group.jsx         |   2 +-
 .../CommunityPage/UpcomingWebinars.jsx             |  21 ++++++++++++---------
 .../PageComponents/CommunityPage/Webinars.jsx      |   5 ++---
 src/components/PageComponents/FeaturesPage/Faq.js  |   4 ++--
 .../PageComponents/FeaturesPage/faqData.json       |  17 +++++++++++------
 9 files changed, 32 insertions(+), 25 deletions(-)

## 755a80a - 2025-09-10 13:45:14
### Update community page and webinars components
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-09-10 13:45:14

Modified JoinCommunity.jsx and Webinars.jsx in the CommunityPage components. Also updated feed.xml and wp-search.json to reflect new content and metadata.

---
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/JoinCommunity.jsx |   4 +-
 .../PageComponents/CommunityPage/Webinars.jsx      | 201 ++++++++++-----------
 4 files changed, 104 insertions(+), 107 deletions(-)

## b9f55b3 - 2025-09-10 12:23:22
### update-[vidushi]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-10 12:23:22

Patronum updates

---
 package-lock.json                                  |  21 ++++--
 package.json                                       |   3 +-
 .../assets/community/11-way-to-rule-them-all.jpg   | Bin 110664 -> 0 bytes
 .../community/2-ways-to-share-google-contacts.webp | Bin 54516 -> 0 bytes
 .../3-ways-to-keep-drive-content-under-control.jpg | Bin 108070 -> 0 bytes
 public/assets/community/appsheet.png               | Bin 0 -> 352691 bytes
 public/assets/community/automate-your-blog.png     | Bin 0 -> 216316 bytes
 .../community/gemini-for-google-workspace.png      | Bin 0 -> 510027 bytes
 ...troduction-google-workspace-file-governance.jpg | Bin 107739 -> 0 bytes
 .../assets/community/patronum-roadmap-q1-2025.jpg  | Bin 98535 -> 0 bytes
 public/assets/community/spotlight-with-paul.png    | Bin 0 -> 371465 bytes
 public/assets/community/start-ups-and-downs.png    | Bin 0 -> 160581 bytes
 ...portance-of-dmarc-within-a-google-workspace.jpg | Bin 125841 -> 0 bytes
 public/assets/community/triangle.png               | Bin 394 -> 279 bytes
 public/assets/community/upcoming-webinar.png       | Bin 0 -> 183276 bytes
 .../community/using-app-script-with-appsheet.png   | Bin 0 -> 200173 bytes
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/Group.jsx         |  14 +++-
 .../PageComponents/CommunityPage/Hero.jsx          |  14 +++-
 .../PageComponents/CommunityPage/JoinCommunity.jsx |  71 +++++++++++++++++++--
 .../CommunityPage/UpcomingWebinars.jsx             |  12 ++--
 .../PageComponents/CommunityPage/Webinars.jsx      |  55 +++++++++-------
 23 files changed, 148 insertions(+), 48 deletions(-)

## c196e6b - 2025-09-09 15:30:29
### updatex
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-09 15:30:29


---
 public/feed.xml                                          | 4 ++--
 public/wp-search.json                                    | 2 +-
 src/components/PageComponents/CommunityPage/Group.jsx    | 2 +-
 src/components/PageComponents/CommunityPage/Hosting.jsx  | 4 ++--
 src/components/PageComponents/CommunityPage/Webinars.jsx | 6 +++---
 5 files changed, 9 insertions(+), 9 deletions(-)

## 9f15227 - 2025-09-09 15:18:22
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-09 15:18:22


---
 public/feed.xml                                    |  4 +-
 public/wp-search.json                              |  2 +-
 .../PageComponents/CommunityPage/Hosting.jsx       | 43 ++++++++++------------
 .../PageComponents/CommunityPage/Webinars.jsx      |  6 +--
 4 files changed, 26 insertions(+), 29 deletions(-)

## 009b555 - 2025-09-09 14:19:28
### Update community join logic and regenerate feeds
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-09-09 14:19:28

Refreshed the RSS feed and search index timestamps. Updated JoinCommunity.jsx in the CommunityPage component, likely to improve or fix the community join functionality.

---
 public/feed.xml                                    |  4 +-
 public/wp-search.json                              |  2 +-
 .../PageComponents/CommunityPage/JoinCommunity.jsx | 60 +++++++++++-----------
 3 files changed, 33 insertions(+), 33 deletions(-)

## 0b9c6f0 - 2025-09-09 14:14:13
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-09 14:14:13


---
 public/feed.xml                                          |  4 ++--
 public/wp-search.json                                    |  2 +-
 src/components/PageComponents/CommunityPage/Hosting.jsx  | 11 ++++++++---
 .../PageComponents/CommunityPage/JoinCommunity.jsx       | 16 ++++++++++++----
 4 files changed, 23 insertions(+), 10 deletions(-)

## 2607e75 - 2025-09-09 14:06:26
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-09 14:06:26


---
 public/assets/community/community-hosting.svg      | 121 ++++++++++++++++++
 public/assets/community/community-network.svg      | 138 +++++++++++++++++++++
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/Features.jsx      |   4 +-
 .../PageComponents/CommunityPage/Hero.jsx          |   8 +-
 .../PageComponents/CommunityPage/Hosting.jsx       |   4 +-
 .../PageComponents/CommunityPage/JoinCommunity.jsx | 115 ++++++++---------
 .../PageComponents/CommunityPage/Network.jsx       |   2 +-
 .../CommunityPage/UpcomingWebinars.jsx             |  12 +-
 .../PageComponents/CommunityPage/Webinars.jsx      |  17 ++-
 11 files changed, 348 insertions(+), 79 deletions(-)

## 43dd1e3 - 2025-09-09 13:44:19
### Update webinar images and refactor community page
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-09-09 13:44:19

Replaced old webinar PNG images with new JPG/WEBP assets and updated image references in Webinars.jsx. Removed unused webinar image files. Cleaned up formatting and improved useEffect hooks in google-workspace-community.js for better readability and consistency.

---
 .../assets/community/11-way-to-rule-them-all.jpg   | Bin 0 -> 110664 bytes
 .../community/2-ways-to-share-google-contacts.webp | Bin 0 -> 54516 bytes
 .../3-ways-to-keep-drive-content-under-control.jpg | Bin 0 -> 108070 bytes
 ...troduction-google-workspace-file-governance.jpg | Bin 0 -> 107739 bytes
 .../assets/community/patronum-roadmap-q1-2025.jpg  | Bin 0 -> 98535 bytes
 ...portance-of-dmarc-within-a-google-workspace.jpg | Bin 0 -> 125841 bytes
 public/assets/community/webinar-1.png              | Bin 139554 -> 0 bytes
 public/assets/community/webinar-2.png              | Bin 166853 -> 0 bytes
 public/assets/community/webinar-3.png              | Bin 147708 -> 0 bytes
 public/assets/community/webinar-4.png              | Bin 160746 -> 0 bytes
 public/assets/community/webinar-5.png              | Bin 161498 -> 0 bytes
 public/assets/community/webinar-6.png              | Bin 157331 -> 0 bytes
 .../PageComponents/CommunityPage/Webinars.jsx      |  17 ++---
 src/pages/google-workspace-community.js            |  77 ++++++++++-----------
 14 files changed, 44 insertions(+), 50 deletions(-)

## 344de5a - 2025-09-09 13:14:46
### update-[vidushi ]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-09 13:14:46


---
 public/assets/community/community-hero.svg         | 117 +++++++++++++++
 public/assets/community/webinar-banner-mobile.png  | Bin 0 -> 110275 bytes
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/Features.jsx      |  18 +--
 .../PageComponents/CommunityPage/Group.jsx         |  21 ++-
 .../PageComponents/CommunityPage/Hero.jsx          |  46 +++---
 .../PageComponents/CommunityPage/Hosting.jsx       |  16 +-
 .../PageComponents/CommunityPage/JoinCommunity.jsx |  22 +--
 .../PageComponents/CommunityPage/Network.jsx       |   9 +-
 .../CommunityPage/UpcomingWebinars.jsx             |  13 +-
 .../PageComponents/CommunityPage/Webinars.jsx      |  20 ++-
 src/pages/google-workspace-community.js            | 166 ++++++++++++++++++++-
 13 files changed, 379 insertions(+), 75 deletions(-)

## 881a08d - 2025-09-08 20:00:47
### update-[vidushi]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-08 20:00:47

Google Workspace community page

---
 public/assets/community/community-hero.png         | Bin 0 -> 33163 bytes
 public/assets/community/features-1.svg             |   4 +
 public/assets/community/features-2.svg             |  11 ++
 public/assets/community/features-3.svg             |   4 +
 public/assets/community/features-4.svg             |   8 ++
 public/assets/community/features-5.svg             |  19 +++
 public/assets/community/group.png                  | Bin 0 -> 1905138 bytes
 public/assets/community/join.svg                   |   5 +
 public/assets/community/network.png                | Bin 0 -> 39152 bytes
 public/assets/community/triangle.png               | Bin 0 -> 394 bytes
 public/assets/community/visit.svg                  |  15 +++
 public/assets/community/wait.svg                   |   7 +
 public/assets/community/webinar-1.png              | Bin 0 -> 139554 bytes
 public/assets/community/webinar-2.png              | Bin 0 -> 166853 bytes
 public/assets/community/webinar-3.png              | Bin 0 -> 147708 bytes
 public/assets/community/webinar-4.png              | Bin 0 -> 160746 bytes
 public/assets/community/webinar-5.png              | Bin 0 -> 161498 bytes
 public/assets/community/webinar-6.png              | Bin 0 -> 157331 bytes
 public/assets/community/webinar-banner.png         | Bin 0 -> 743317 bytes
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 .../PageComponents/CommunityPage/Features.jsx      |  81 ++++++++++++
 .../PageComponents/CommunityPage/Group.jsx         |  31 +++++
 .../PageComponents/CommunityPage/Hero.jsx          | 106 +++++++++++++++
 .../PageComponents/CommunityPage/Hosting.jsx       | 108 ++++++++++++++++
 .../PageComponents/CommunityPage/JoinCommunity.jsx |  69 ++++++++++
 .../PageComponents/CommunityPage/Network.jsx       |  41 ++++++
 .../CommunityPage/UpcomingWebinars.jsx             |  31 +++++
 .../PageComponents/CommunityPage/Webinars.jsx      | 143 +++++++++++++++++++++
 .../PageComponents/FeaturesPage/faqData.json       |  40 ++++++
 src/pages/google-workspace-community.js            |  35 +++++
 31 files changed, 761 insertions(+), 3 deletions(-)

## bda450d - 2025-09-05 16:47:20
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-05 16:47:20


---
 public/feed.xml       |   4 +-
 public/wp-search.json |   2 +-
 src/lib/util.js       | 252 ++++++++++++++++++++++++++++++++++++++++++--------
 src/pages/[slug].js   |  39 --------
 4 files changed, 216 insertions(+), 81 deletions(-)

## c4e1f16 - 2025-09-05 13:17:50
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-05 13:17:50


---
 public/feed.xml       |   4 +-
 public/wp-search.json |   2 +-
 src/lib/util.js       | 131 ++++++++++++++++++++++++++++++++++++++++++++++++++
 src/pages/[slug].js   |  71 ++++++++++++++-------------
 4 files changed, 172 insertions(+), 36 deletions(-)

## a4f0cc7 - 2025-09-04 17:31:05
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-04 17:31:05


---
 public/assets/logo.png                             | Bin 0 -> 3380 bytes
 public/feed.xml                                    |   4 +-
 public/logo.png                                    | Bin 0 -> 3380 bytes
 public/wp-search.json                              |   2 +-
 .../PageComponents/BlogPage/BlogLayout.js          |   1 +
 src/components/PageLayout/BreadCrumb/index.jsx     |  55 +++++++++++++--------
 src/data/posts.js                                  |   3 ++
 src/pages/[slug].js                                |  54 ++++++++++++++++++--
 8 files changed, 90 insertions(+), 29 deletions(-)

## 7130eec - 2025-09-04 11:44:36
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-04 11:44:36


---
 public/feed.xml       | 4 ++--
 public/wp-search.json | 2 +-
 2 files changed, 3 insertions(+), 3 deletions(-)

## 52e4202 - 2025-09-03 18:41:51
### update
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-09-03 18:41:51


---
 public/feed.xml                                | 4 ++--
 public/wp-search.json                          | 2 +-
 src/components/PageLayout/BreadCrumb/index.jsx | 1 +
 src/pages/[slug].js                            | 9 +++++----
 4 files changed, 9 insertions(+), 7 deletions(-)

## 6a2c10b - 2025-09-03 14:54:20
### Add responsible purchasing charter SVG asset
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-09-03 14:54:20

Added a new SVG file for the responsible purchasing charter in the public assets. This asset may be used for legal or informational pages requiring visual representation of the charter.

---
 .../legal/responsible-purchasing-charter.svg       | 70 ++++++++++++++++
 public/feed.xml                                    | 73 ++++++++++++++---
 public/wp-search.json                              |  2 +-
 src/components/Buttons/CallButton.jsx              |  4 +-
 src/components/Buttons/FooterInstallButton.jsx     |  4 +-
 src/components/Buttons/primary.module.css          | 16 ++--
 src/components/Calendly/index.jsx                  |  2 +-
 src/components/Footer/FooterContact.js             |  3 +-
 src/components/Footer/index.js                     |  4 +-
 src/components/Header/DesktopNavigation.js         | 14 ++--
 src/components/Header/desktop.module.css           |  3 +-
 src/components/LandingPage/Footer.jsx              |  4 +-
 src/components/LandingPage/Layout.jsx              |  2 +-
 src/components/LandingPage/Pricing.jsx             |  9 +-
 src/components/LandingPage/PricingCard.js          |  5 +-
 src/components/PageComponents/BlogPage/PostCard.js |  3 +-
 .../PageComponents/FeaturesPage/faqData.json       |  2 +-
 src/components/PageComponents/HomePage/Features.js | 26 +++---
 src/components/PageComponents/HomePage/Hero.js     | 14 ++--
 src/components/PageComponents/HomePage/Pricing.js  |  4 +-
 src/components/PageComponents/HomePage/UseCases.js | 20 +++--
 src/components/PageComponents/PricePage/Pricing.js |  2 -
 src/components/PageLayout/Button/CallButton.jsx    |  4 +-
 src/components/PageLayout/Hero/index.js            |  4 +-
 .../PricingPagesComp/BusinessPricing.jsx           |  4 +-
 .../PricingPagesComp/EducationPricing.jsx          |  4 +-
 src/components/SideMenu/index.js                   | 95 +++++++++++-----------
 src/pages/_app.js                                  | 38 ++++++++-
 src/pages/api/newsletter.js                        | 72 ----------------
 src/pages/email-signature-management.js            | 51 +++++++++++-
 src/pages/features.js                              | 59 ++++++++++++--
 src/pages/google-contact-sharing.js                | 51 +++++++++++-
 src/pages/google-drive-compliance.js               | 53 +++++++++++-
 src/pages/google-drive-management.js               | 53 +++++++++++-
 src/pages/google-workspace-backup.js               | 51 +++++++++++-
 src/pages/index.js                                 | 59 +++++++++++---
 src/pages/legal.js                                 | 20 ++++-
 src/pages/on-boarding.js                           | 51 +++++++++++-
 src/pages/organisational-chart.js                  | 51 +++++++++++-
 src/pages/patronum-for-business.js                 |  2 +-
 src/pages/patronum-for-education.js                |  2 +-
 src/pages/patronum-for-hr.js                       |  2 +-
 src/pages/patronum-for-sales-marketing.js          |  2 +-
 src/pages/patronum-for-users.js                    |  2 +-
 src/pages/pricing-for-business.js                  |  4 +-
 src/pages/pricing-for-education.js                 |  8 +-
 src/pages/pricing.js                               |  2 +-
 src/pages/privacy-policy.js                        | 13 ++-
 src/pages/use-cases.js                             |  2 +-
 src/styles/pricing.module.css                      |  5 +-
 50 files changed, 783 insertions(+), 267 deletions(-)

## 1e73692 - 2025-04-16 21:42:36
### Update Content
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-04-16 21:42:36


---
 public/feed.xml                                    | 13 +++++-
 public/wp-search.json                              |  2 +-
 src/components/Header/DesktopNavigation.js         |  2 +-
 src/components/Header/MobileNavigation.js          | 48 ++++++++++-----------
 .../PageComponents/FeaturesPage/Transform.jsx      | 49 ++++++++++------------
 src/pages/email-signature-management.js            |  2 +-
 src/pages/google-contact-sharing.js                |  2 +-
 src/pages/google-drive-compliance.js               | 13 ++----
 src/pages/google-drive-management.js               |  2 +-
 src/pages/google-workspace-backup.js               |  2 +-
 src/pages/on-boarding.js                           |  2 +-
 src/pages/organisational-chart.js                  |  2 +-
 12 files changed, 68 insertions(+), 71 deletions(-)

## 78a0a6c - 2025-04-14 16:03:57
### Update
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-04-14 16:03:57


---
 public/feed.xml                                                   | 4 ++--
 public/wp-search.json                                             | 2 +-
 src/components/Header/DesktopNavigation.js                        | 2 +-
 src/components/Header/MobileNavigation.js                         | 2 +-
 src/components/PageComponents/FeaturesPage/FeatureDetailCards.jsx | 6 +++---
 src/pages/email-signature-management.js                           | 2 +-
 src/pages/google-contact-sharing.js                               | 2 +-
 src/pages/google-drive-compliance.js                              | 6 +++---
 src/pages/google-drive-management.js                              | 2 +-
 src/pages/google-workspace-backup.js                              | 2 +-
 src/pages/pricing-for-business.js                                 | 4 ++--
 src/pages/pricing-for-education.js                                | 2 +-
 12 files changed, 18 insertions(+), 18 deletions(-)

## b849700 - 2025-04-11 16:37:29
### Update
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-04-11 16:37:29


---
 public/feed.xml                            |  4 ++--
 public/wp-search.json                      |  2 +-
 src/components/Buttons/PinkButton.jsx      | 27 +++++++++++++++++++++++++++
 src/components/Buttons/primary.module.css  |  5 +++++
 src/components/Header/DesktopNavigation.js |  4 ++--
 src/pages/pricing.js                       |  2 +-
 6 files changed, 38 insertions(+), 6 deletions(-)

## 0b1095e - 2025-04-09 21:44:39
### Update
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-04-09 21:44:39


---
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 src/components/Buttons/DemoBlue.jsx                |   2 +-
 src/components/Buttons/DemoButton.jsx              |   2 +-
 src/components/Forms/ContactForm.js                | 310 ++++++++++-----------
 src/components/LandingPage/PricingCard.js          |   3 -
 src/components/PageComponents/BlogPage/PostCard.js |   2 +-
 src/components/PageComponents/PricePage/Pricing.js |   2 +-
 .../PricingPagesComp/BusinessPricing.jsx           |   2 +-
 .../PricingPagesComp/EducationPricing.jsx          |   2 +-
 src/pages/_app.js                                  |   2 +-
 src/styles/pricing.module.css                      |  35 +--
 12 files changed, 177 insertions(+), 191 deletions(-)

## 2ed8705 - 2025-04-09 20:05:54
### update-(harsh)
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-04-09 20:05:54

changes

---
 public/feed.xml                                          | 12 ++++++------
 public/wp-search.json                                    |  2 +-
 src/components/Buttons/DemoButton.jsx                    | 12 ++++++------
 src/components/Buttons/LinkButton.jsx                    |  2 +-
 src/components/Buttons/link.module.css                   |  8 ++++----
 src/components/PageComponents/BlogPage/RelatedPosts.js   |  2 +-
 src/components/PageComponents/FeaturesPage/Transform.jsx |  2 +-
 src/components/PageComponents/HomePage/About.js          |  2 +-
 src/components/PageComponents/HomePage/Features.js       |  2 +-
 src/components/PageComponents/HomePage/PricingCard.js    |  2 +-
 src/components/PageLayout/SectionBreak.js                |  2 +-
 src/pages/google-contact-sharing.js                      |  2 ++
 src/pages/google-drive-compliance.js                     |  2 ++
 src/pages/google-drive-management.js                     |  2 ++
 src/pages/google-workspace-backup.js                     |  2 ++
 src/pages/on-boarding.js                                 |  4 +++-
 src/pages/organisational-chart.js                        |  2 ++
 src/styles/globals.css                                   | 14 +++++++-------
 18 files changed, 44 insertions(+), 32 deletions(-)

## 4875fc4 - 2025-04-09 18:23:19
### UX audit - update 1
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-04-09 18:23:19


---
 src/pages/sitemap/page_sitemap1.xml.js | 1 -
 1 file changed, 1 deletion(-)

## 1f8d933 - 2025-04-09 18:05:35
### update-(harsh)
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-04-09 18:05:35

changes in UX

---
 package-lock.json                                  | 157 ++++++++++++++++++++-
 package.json                                       |   2 +-
 public/assets/contact/new-install-modal.svg        | 153 ++++++++++++++++++++
 .../feature-transform.svg                          | 127 +++++++++++++++++
 public/assets/pricing/pricing-illustration-1.svg   |  56 ++++++++
 public/feed.xml                                    |  72 +++++++++-
 public/wp-search.json                              |   2 +-
 src/components/Buttons/FooterInstallButton.jsx     |  27 ++++
 src/components/Buttons/InstallButton.jsx           |  20 +--
 src/components/Buttons/primary.module.css          |   6 +-
 src/components/Footer/FooterContact.js             |  11 +-
 src/components/Footer/footer.module.css            |  19 ++-
 src/components/Forms/ContactForm.js                |  20 ++-
 src/components/Header/DesktopNavigation.js         |  49 ++++++-
 src/components/Header/MobileNavigation.js          |  11 +-
 src/components/LandingPage/Pricing.jsx             |   2 +-
 src/components/LandingPage/PricingCard.js          |  10 +-
 src/components/Modals/InstallModal.js              |  18 ++-
 .../PageComponents/BlogPage/Pagination.js          |  19 +--
 .../PageComponents/FeaturesPage/Transform.jsx      |  39 +++++
 src/components/PageComponents/HomePage/Pricing.js  |  87 +++++++-----
 .../PageComponents/HomePage/PricingCard.js         |  72 ++++++----
 src/components/PageComponents/HomePage/Ratings.jsx |   2 +-
 src/components/PageComponents/PricePage/Pricing.js |  65 ++++-----
 .../PageComponents/PricePage/PricingCard.js        |  15 +-
 src/components/PageLayout/Button/PrimaryButton.jsx |   2 +-
 .../PageLayout/Button/primary.module.css           |   6 +-
 src/components/PageLayout/Hero/index.js            |   7 +-
 src/components/PageLayout/index.js                 |   3 +-
 .../PricingPagesComp/BusinessPricing.jsx           |   4 +-
 .../PricingPagesComp/EducationPricing.jsx          |   7 +-
 src/pages/email-signature-management.js            |   2 +
 src/pages/pricing-for-business.js                  |   7 +-
 src/pages/pricing-for-education.js                 |   4 +-
 src/pages/pricing.js                               |   1 +
 src/pages/sitemap/page_sitemap1.xml.js             |  14 +-
 src/styles/pricing.module.css                      |  18 ++-
 37 files changed, 923 insertions(+), 213 deletions(-)

## be9292b - 2025-03-18 20:32:26
### Update Final - Pricing Pages
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-03-18 20:32:26


---
 public/assets/businessPricing/patronum-plus.svg    | 315 +++++++++------------
 public/assets/businessPricing/patronum.svg         | 139 ++++-----
 public/assets/educationPricing/patronum-plus.svg   | 155 +++++-----
 public/assets/educationPricing/patronum.svg        |  81 +++---
 public/assets/heroSections/business-hero.svg       |  88 ------
 public/assets/heroSections/business-price-hero.svg |  98 +++++++
 .../assets/heroSections/education-price-hero.svg   | 108 +++++++
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 src/components/Header/DesktopNavigation.js         |  13 +-
 src/components/LandingPage/Pricing.jsx             |  10 +
 src/components/LandingPage/PricingCard.js          |  17 +-
 src/components/PageComponents/PricePage/Pricing.js |  43 +--
 .../PageComponents/PricePage/PricingCard.js        |  61 +---
 .../PricingPagesComp/BusinessPricing.jsx           |  90 +++---
 .../PricingPagesComp/EducationPricing.jsx          |  12 +-
 src/pages/patronum-for-business.js                 |   1 -
 src/pages/pricing-for-business.js                  |   2 +-
 src/pages/pricing-for-education.js                 |   8 +-
 src/pages/pricing.js                               |   4 -
 src/pages/sitemap/page_sitemap1.xml.js             |   5 +
 21 files changed, 630 insertions(+), 626 deletions(-)

## 02313f8 - 2025-03-18 15:24:31
### Update
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-03-18 15:24:31


---
 public/assets/menu/pricing-for-business.svg        |   3 +
 public/assets/menu/pricing-for-education.svg       |   3 +
 public/feed.xml                                    |   4 +-
 public/wp-search.json                              |   2 +-
 src/components/Header/DesktopNavigation.js         |  20 ++-
 src/components/LandingPage/Pricing.jsx             |   5 +
 src/components/LandingPage/PricingCard.js          |   4 +-
 .../PageComponents/AlternativePage/Comparison.jsx  | 125 +++++++++++++++
 .../PricingPagesComp/BusinessPricing.jsx           |   3 +-
 .../PricingPagesComp/EducationPricing.jsx          |   6 +-
 src/pages/better-cloud-alternative.js              | 166 ++++++++++++++++++++
 src/pages/cloudm-manage-alternative.js             | 168 ++++++++++++++++++++
 src/pages/pricing-for-business.js                  |   5 -
 src/pages/promevo-gpanel-alternative.js            | 169 +++++++++++++++++++++
 14 files changed, 657 insertions(+), 26 deletions(-)

## 1efe2a8 - 2025-03-18 14:30:13
### update-(harsh)
**Author:** Harshgoyal-WebDev <138307903+Harshgoyal-WebDev@users.noreply.github.com>
**Date:** 2025-03-18 14:30:13


---
 next-seo.config.js                                 |   19 +
 next.config.js                                     |  224 ++-
 package-lock.json                                  |   13 +
 package.json                                       |    2 +
 plugins/feed.js                                    |    5 -
 plugins/plugin-compiler.js                         |    3 +-
 plugins/util.js                                    |   29 +-
 public/assets/businessPricing/patronum-plus.svg    |  186 +++
 public/assets/businessPricing/patronum.svg         |   66 +
 public/assets/educationPricing/patronum-plus.svg   |   78 +
 public/assets/educationPricing/patronum.svg        |   42 +
 public/assets/extras/free-trial.png                |  Bin 0 -> 14953 bytes
 public/assets/heroSections/business-hero.svg       |   88 +
 public/assets/heroSections/education-hero.svg      |  200 +++
 public/assets/home/features-1-icon.svg             |   10 +
 public/assets/home/features-2-icon.svg             |   16 +
 public/assets/home/features-3-icon.svg             |    3 +
 public/assets/home/features-4-icon.svg             |    5 +
 public/assets/home/features-5-icon.svg             |   10 +
 public/assets/home/features-6-icon.svg             |   11 +
 public/assets/patronum-bg.mp4                      |  Bin 0 -> 13499421 bytes
 public/assets/pricing/business-plus.svg            |  144 ++
 public/assets/pricing/education-plus.svg           |   87 +
 public/email-signature.html                        |  452 ++++++
 public/feed.xml                                    |  853 +++++++++-
 public/wp-search.json                              |    1 +
 src/components/Buttons/DemoBlue.jsx                |   27 +
 src/components/Buttons/link.module.css             |    3 +-
 src/components/Footer/Newsletter.jsx               |   13 +-
 src/components/Footer/index.js                     |   40 +-
 src/components/Forms/FreeTrialForm.js              |  255 +++
 src/components/Header/DesktopNavigation.js         |   77 +-
 src/components/Header/MobileNavigation.js          |   95 +-
 src/components/Header/desktop.module.css           |    1 +
 src/components/LandingPage/Features.jsx            |  169 ++
 src/components/LandingPage/Footer.jsx              |  168 ++
 src/components/LandingPage/Footercontact.jsx       |   44 +
 src/components/LandingPage/Hero.jsx                |  128 ++
 src/components/LandingPage/InstallButton.jsx       |   39 +
 src/components/LandingPage/Layout.jsx              |   44 +
 src/components/LandingPage/PriceDropDown.js        |   55 +
 src/components/LandingPage/Pricing.jsx             |  137 ++
 src/components/LandingPage/PricingCard.js          |  105 ++
 src/components/Layout/BgVideo.jsx                  |   34 +
 src/components/Layout/index.jsx                    |    8 +-
 src/components/Modals/ModalContext.js              |    4 +-
 .../PageComponents/AlternativePage/Comparison.jsx  |  125 --
 .../PageComponents/BlogPage/BlogLayout.js          |    2 +-
 .../PageComponents/BlogPage/FeaturedPost.js        |    2 +-
 src/components/PageComponents/BlogPage/PostCard.js |   93 +-
 .../PageComponents/BlogPage/RelatedPosts.js        |   20 +-
 src/components/PageComponents/FeaturesPage/Faq.js  |    2 +-
 .../PageComponents/FeaturesPage/faqData.json       | 1682 ++++++++++----------
 src/components/PageComponents/HomePage/Blogs.js    |  130 --
 .../PageComponents/HomePage/MobileSwiper.js        |  100 --
 src/components/PageComponents/HomePage/Ratings.jsx |    4 +-
 .../PageComponents/HomePage/UseCasesMobile.js      |   98 +-
 src/components/PageLayout/Hero/index.js            |   12 +-
 .../PricingPagesComp/BusinessPricing.jsx           |  163 ++
 .../PricingPagesComp/EducationPricing.jsx          |  183 +++
 src/components/Search/index.jsx                    |  123 +-
 src/components/ui/checkbox.jsx                     |    2 +-
 src/components/ui/country-selector.jsx             |    2 +-
 src/data/categories.js                             |   55 +-
 src/data/menus.js                                  |   23 -
 src/data/posts.js                                  |  302 +---
 src/data/users.js                                  |   55 -
 src/hooks/use-search.js                            |   91 ++
 src/lib/categories.js                              |   63 +-
 src/lib/menus.js                                   |   16 -
 src/lib/posts.js                                   |  117 --
 src/lib/search.js                                  |    9 +
 src/lib/users.js                                   |  166 --
 src/pages/404.js                                   |    3 +-
 src/pages/[slug].js                                |   32 +-
 src/pages/_app.js                                  |   61 +-
 src/pages/api/newsletter.js                        |  148 +-
 src/pages/bettercloud-alternative.js               |  169 --
 src/pages/blog.js                                  |   27 +-
 src/pages/category/[slug].js                       |   30 +-
 src/pages/cloudm-manage-alternative.js             |  170 --
 src/pages/free-trial.js                            |  197 +++
 src/pages/pricing-for-business.js                  |   36 +
 src/pages/pricing-for-education.js                 |   36 +
 src/pages/privacy-policy.js                        |    4 +-
 src/pages/promevo-gpanel-alternative.js            |  172 --
 src/pages/search.js                                |   79 +-
 src/pages/security-and-compliance.js               |    8 +-
 src/pages/thank-you.js                             |    3 +-
 src/pages/webinars.js                              |   18 +-
 src/styles/blog.module.css                         |  525 +++---
 src/styles/globals.css                             |   37 +-
 src/styles/pricing.module.css                      |    2 +
 93 files changed, 6203 insertions(+), 3187 deletions(-)

## 381b2d2 - 2025-01-13 19:19:35
### update-[vidushi]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-01-13 19:19:35


---
 src/components/PageComponents/AlternativePage/Comparison.jsx | 3 ++-
 1 file changed, 2 insertions(+), 1 deletion(-)

## c1ca987 - 2025-01-13 19:04:09
### update-[vidushi]
**Author:** Vidushi Saxena <vidushisaxenabdn786@gmail.com>
**Date:** 2025-01-13 19:04:09

Comparison table , alternative pages- better cloud, cloudm manage, promevo gpanel

---
 .../PageComponents/AlternativePage/Comparison.jsx  | 124 +++++++++++++++
 src/components/PageLayout/Hero/index.js            |  12 +-
 src/pages/bettercloud-alternative.js               | 169 ++++++++++++++++++++
 src/pages/cloudm-manage-alternative.js             | 170 ++++++++++++++++++++
 src/pages/promevo-gpanel-alternative.js            | 172 +++++++++++++++++++++
 src/styles/globals.css                             |  12 ++
 6 files changed, 654 insertions(+), 5 deletions(-)

## 30601f3 - 2025-01-13 10:54:55
### Update
**Author:** Hitesh Bhardwaj <bhardwajhitesh09@gmail.com>
**Date:** 2025-01-13 10:54:55


---
 public/feed.xml                                    |   4 +-
 .../BlogPage/{BlogHero.jsx => BlogLayout.js}       |  87 +++---
 .../PageComponents/BlogPage/RelatedPosts.js        |  41 +--
 src/components/PageComponents/HomePage/Faqs.js     |   3 -
 src/components/PageComponents/HomePage/MetaData.js |  86 ------
 .../PageComponents/HomePage/MobileSwiper.js        | 100 +++++++
 src/components/PageComponents/HomePage/Pricing.js  |  31 +--
 src/components/PageComponents/HomePage/UseCases.js | 184 ++++++-------
 .../PageComponents/HomePage/UseCasesMobile.js      |  98 +------
 src/pages/[slug].js                                |  82 +++---
 src/pages/index.js                                 | 302 +++++++++++++++++++--
 src/pages/thank-you.js                             |  22 +-
 src/utils/gsapAnimations.js                        | 128 ---------
 src/utils/splitText.js                             |  63 -----
 14 files changed, 586 insertions(+), 645 deletions(-)
