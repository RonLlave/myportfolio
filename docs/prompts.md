# Here are the new professional skills to add for my portfolio

## AI Prompting skills for software engineering

1. Anthropic's Claude Code (For main software development)
   - MCP setup like supabase
   - Multi agent session
   - Research purposes
2. Google Gemini (Mainly used for audio diarization and transcript)

## Others

1. Coolify (with self hosted supabase plus mattermost setup)
2. Docker
3. Google Cloud OAuth setups

# Another notes:

1. Please remove the image being displayed in project section and make them as a list instead.
2. So for the new projects to list with (from my latest employer) all are using supabase for database and coolify for deployment, please see below:
   a. Bot Meeting Management System - used with nextjs/ts with playwright. A desktop frontend app plus backend project (literally separated) that manages user's google meeting and can invite playwright bot to the google meeting and audio records it with speaker diarization (using google meet element checking). User can manually end the bot recording using the frontend or the bot automatically leaves if there are no participants in the meeting then it saves the audio to the database. The audio that is freshly saved will automatically creates AI summary and Meeting dialogues (with the participant and timestamp) to the db and to be displayed in the frontend.
   b. Academy App - used with nextjs/ts with vimeo and PWA. A mobile and desktop app used as a learning course app that can add new courses from the admins and to be used for the normal users to learn added courses. It uses vimeo as the main video streaming API and after the users finished the videos, it has a quiz feature that computes the passing rate of the normal users.
   c. Extra services app - used with nextjs/ts with PWA. A mobile focused app that have different forms, from the company, to input with and have brochures pdf files to display.
   d. Consultation App - used with nextjs/ts with PWA. Both mobile and desktop app, that have a consultation form to input with, used for the company, and purpose to hold records. And after every consultation inputs, it saves it as pdf file using the template straight to the user's google drive.

# Please look also the @/docs/initial-nextjs-app-setup-reference.md reference for all of the web apps created and supported with have this similar packages setup.
