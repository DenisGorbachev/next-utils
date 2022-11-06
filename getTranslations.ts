import { SSRConfig, UserConfig } from 'next-i18next'
import { serverSideTranslations as serverSideTranslationsOriginal } from 'next-i18next/serverSideTranslations'
import getConfig from 'next/config'
import config from '../../../next-i18next.config.cjs'
import { LocalizedContext } from './next'

const { serverRuntimeConfig } = getConfig()

export const serverSideTranslations = async (
  initialLocale: string,
  namespacesRequired: string[] | undefined = undefined,
  configOverride: UserConfig | null = null,
): Promise<SSRConfig> => serverSideTranslationsOriginal(initialLocale, namespacesRequired, { ...config, ...serverRuntimeConfig.i18n, ...configOverride })

export async function getTranslations(context: LocalizedContext, namespaces: string[] = []) {
  return serverSideTranslations(context.locale, namespaces.concat(['common']))
}
