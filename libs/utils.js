const pad = n => n < 10 ? `0${n}` : n

export const getTimeObj = (lapse) => {
  const millisecond = pad(Math.floor((lapse % 1000) / 10))
  const second = pad(Math.floor(lapse / 1000) % 60)
  const minute = pad(Math.floor(lapse / 60000))
  return { minute, second, millisecond }
}

export const isSpace = (event) => event.which === 32
