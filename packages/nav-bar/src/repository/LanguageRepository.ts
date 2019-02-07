// @ts-ignore
import api from '@molgenis/molgenis-api-client'

export default {
  async getActivelangueges (): Promise<any> {
    return api.get('/api/v2/sys_Language?q=active==true').then((response: any) => {
      return response.items.map((item:any) => ({ id: item.code, label: item.name }))
    })
  },
  async getSelectedlanguegeCode (): Promise<any> {
    return api.get('/api/v2/sys_Language').then((response: any) => {
      return response.meta.languageCode
    })
  },
  async setSelectedLanguage (languageCode: string): Promise<any> {
    return api.post('/plugin/useraccount/language/update?languageCode=' + languageCode)
  }
}
