import { gql } from '@apollo/client'

export const GET_ISSUES = gql`
    query {
        search(query: "repo:YutoUrushima/github-issue-next-blog is:issue", type: ISSUE, first: 5) {
            issueCount
            nodes {
                ... on Issue { number title }
            }
        }
    }
`