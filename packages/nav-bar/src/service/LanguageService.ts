export default {
  selectedLanguage (languageOptions: Object[], selectedLangCode: string): Object | undefined {
    return languageOptions.find((language: any) => {
      return language.id === selectedLangCode
    })
  }
}
