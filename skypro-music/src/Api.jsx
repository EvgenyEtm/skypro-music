/* eslint-disable no-debugger */
const apiUrl = 'https://skypro-music-api.skyeng.tech/'

export async function getTracks() {
  const response = await fetch(`${apiUrl}catalog/track/all/`, {
    method: 'GET',
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }

  return data
}

// АВТОРИЗОВАТЬСЯ

export async function login(email, password) {
  const response = await fetch(`${apiUrl}user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  })
  if (response.status === 401) {
    throw new Error('Пользователь с таким email или паролем не найден')
  }
  const userData = await response.json()
  return userData
}

export async function getToken(email, password) {
  return await fetch('https://skypro-music-api.skyeng.tech/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  }).then((response) => response.json())
}

// ЗАРЕГИСТРИРОВАТЬСЯ

export async function signupUser(email, password) {
  const response = await fetch(`${apiUrl}user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      'content-type': 'application/json',
    },
  })
  if (response.status === 400) {
    throw new Error(
      'Не получилось зарегистрировать пользователя с указанными данными',
    )
  }
  if (response.status === 500) {
    throw new Error('Ошибка сервера')
  }

  const userData = await response.json()
  console.log(userData)
  return userData
}
