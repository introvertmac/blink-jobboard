# Blink Job Board

## Overview

The Blink Job Board is a Blink job application platform that allows developers to submit their profiles for job opportunities. It integrates with Airtable to manage job applications.

## Features

- **Submit Profile**: Users can submit their Superteam or GitHub profiles for job applications.
- **Profile Validation**: Validates profile links for Superteam or GitHub.
- **Airtable Integration**: Stores profile details and application information.
- **Transaction Fee Estimate**: Provides an estimated transaction fee for the submission.

## Environment Variables

To run the Blink Job Board, you need to configure the following environment variables:

- **`AIRTABLE_PERSONAL_ACCESS_TOKEN`**: Your Airtable personal access token. This is used for authentication with the Airtable API.
- **`AIRTABLE_BASE_ID`**: The ID of your Airtable base where job applications will be stored.

Ensure these variables are set in your environment before running the application. You can set them in a `.env.loval` file at the root of your project:
```AIRTABLE_PERSONAL_ACCESS_TOKEN=your_airtable_personal_access_token```
```AIRTABLE_BASE_ID=your_airtable_base_id```


## Configuration

1. **Airtable Configuration**: 
   - The application connects to Airtable using the `airtable` package. It requires your personal access token and base ID to read from and write to your Airtable base.
   - The base should have a table named "Job Board" with fields for "Superteam Username", "GitHub Username", "Wallet Address", and "Submission Date". This format is required to make this blink work. 

2. **Solana Configuration**:
   - Connects to the Solana `mainnet-beta` cluster using the `@solana/web3.js` package.
   - Creates a dummy transaction to estimate fees, which is part of the response to a successful profile submission.

## Endpoints

- **GET /api/actions/job**: Provides information about the job application action. Users will see a form where they can submit their profile link.
- **POST /api/actions/job**: Handles the submission of job applications. Validates the profile link, checks for existing profiles, saves data to Airtable, and estimates transaction fees.

## Testing

You can test the job application process by visiting the following URL:

[Submit Job Profile](https://dial.to/?action=solana-action:https://www.dappshunt.xyz/api/actions/job)

## Error Handling

- **Missing Configuration**: If `AIRTABLE_PERSONAL_ACCESS_TOKEN` or `AIRTABLE_BASE_ID` is missing, an error will be thrown.
- **Invalid Profile Link**: Profiles must be from Superteam or GitHub. Invalid links will result in an error.
- **Existing Profile**: Duplicate profiles for the same wallet address are not allowed.

## Development

1. Clone the repository:

`git clone https://github.com/your-repo/blink-job-board.git`

`cd blink-job-board`


2. Install dependencies:

`npm install`


3. Set up environment variables:

Create a `.env.local` file in the root directory and add your Airtable credentials.

4. Start the server:

`npm run dev`

If your server is running on port 3000, you can access your blink at:

https://dial.to/?action=solana-action:http://localhost:3000/api/actions/job



## Contributing

Feel free to submit issues or pull requests to improve the project






