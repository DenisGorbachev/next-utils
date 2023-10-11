import { i18n } from 'i18next'
import { useTranslation } from 'next-i18next'

export function useNamespaces(namespaces: string[]) {
  const { i18n } = useTranslation(namespaces)
  return mapNamespaces(i18n, namespaces)
}

export function mapNamespaces(i18n: i18n, namespaces: string[]) {
  return namespaces.map(n => i18n.getFixedT(null, n))
}
