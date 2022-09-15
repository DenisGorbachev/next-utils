import config from '../../../next-i18next.config.cjs'
import getConfig from 'next/config'
import { SSRConfig, UserConfig, useTranslation } from 'next-i18next'
import { serverSideTranslations as serverSideTranslationsOriginal } from 'next-i18next/serverSideTranslations'
import { LocalizedContext } from './next'
import { withNamespaces } from '../../util/src/i18next'

const { serverRuntimeConfig } = getConfig()

export const serverSideTranslations = async (
  initialLocale: string,
  namespacesRequired: string[] | undefined = undefined,
  configOverride: UserConfig | null = null,
): Promise<SSRConfig> => serverSideTranslationsOriginal(initialLocale, namespacesRequired, { ...config, ...serverRuntimeConfig.i18n, ...configOverride })

export async function getTranslations(context: LocalizedContext, namespaces: string[] = []) {
  return serverSideTranslations(context.locale, namespaces.concat(['common']))
}

export function useNamespaces(namespaces: string[]) {
  const { t } = useTranslation(namespaces)
  return withNamespaces(t, namespaces)
}
