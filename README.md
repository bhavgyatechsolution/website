# Bhavgya Technologies Website - GitHub Ready

This package is a static website and can be deployed directly using GitHub Pages or any standard web host.

## What has been added

- Dedicated **Career & Internship Hub**
- Technology internship tracks across AI/ML, Data Science, Python, IoT, Blockchain, Power BI, Cybersecurity, Full Stack, Cloud, Robotics, Embedded Systems, AgriTech, AI in Livestock/Dairy/Fisheries, and Project Management
- Internship journey / process section
- Dedicated **MOOC Courses** section
- 9 MOOC/course tracks based on the technology course portfolio
- **2 local MP4 reel/video slots** for featured courses
- Responsive mobile layout
- Updated navigation, contact section and training fee disclaimer

## Publish to GitHub Pages

1. Open your existing GitHub website repository.
2. Back up the current files if required.
3. Replace the existing website files with the contents of this folder.
4. Commit and push the changes.
5. If GitHub Pages is already enabled, the updated website will publish from the same configured branch/folder.
6. If it is not enabled: Repository **Settings → Pages → Deploy from a branch**, then select the website branch (commonly `main`) and root folder.

## Add 1-2 MOOC reels/videos

Place MP4 files inside the `Videos` folder using these names:

- `Videos/mooc-course-1.mp4`
- `Videos/mooc-course-2.mp4`

The website automatically shows a placeholder if the file is absent and shows the video player when the file is present.

To change the displayed title/description, search `index.html` for `Course Reel 01` or `Course Reel 02` and edit the adjacent heading and paragraph.

## Important AICTE wording note

The website intentionally does **not** claim that Bhavgya Technologies is AICTE-approved or that every program is an AICTE Internship Portal internship. Institutional internship hours/credits must be mapped according to the applicable AICTE/university rules.

Also, paid training fees are displayed separately from AICTE Internship Portal opportunities. Organizations registering internships on the AICTE Internship Portal are currently required to confirm that they will not charge students a fee for internships offered through that portal.

## Contact details currently used

- Email: bhavgyatechsolutions@gmail.com
- Training enquiry: +91 79737 73119
- HQ: Chandigarh, India

## Files

- `index.html` - page content and sections
- `styles.css` - complete styling and responsive design
- `script.js` - mobile navigation, technology filters, video-slot handling
- `Images/` - existing workshop photographs
- `Videos/` - place the two optional course reel MP4 files here
