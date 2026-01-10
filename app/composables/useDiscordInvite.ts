export const useDiscordInvite = () => {
  const config = useRuntimeConfig()
  const clientId = config.public.discordClientId
  
  const inviteUrl = computed(() => {
    return `https://discord.com/oauth2/authorize?client_id=${clientId}`
  })
  
  return {
    inviteUrl
  }
}
