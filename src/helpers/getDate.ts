export const getMonth = (current: number) => {
  const month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]
  return month[current]
}

export const TODAY = new Date().toLocaleDateString()
export const TOMORROW = String(+TODAY.slice(0, 2) + 1)
  .padStart(2, '0')
  .concat(TODAY.slice(2))

export const getCurrentDay = (date: string) => {
  if (date === TODAY) return 'Сегодня'
  if (date === TOMORROW) return 'Завтра'
  return date
}
