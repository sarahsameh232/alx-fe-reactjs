const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${githubApiKey}`,
      },
    });
    if (!response.ok) {
      throw new Error('User not found');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
