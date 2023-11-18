import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
  const dictionaryFunction = dictionaries[locale]

  if (!dictionaryFunction) {
    throw new Error(`Dictionary for locale ${locale} not found`)
  }

  return dictionaryFunction()
}
