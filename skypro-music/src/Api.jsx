export async function getTracks() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
    {
      method: 'GET',
    },
  )
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }

  return data
}
