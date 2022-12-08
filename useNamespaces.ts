import { useTranslation } from 'next-i18next'

export function useNamespaces(namespaces: string[]) {
  const { i18n } = useTranslation(namespaces)
  return namespaces.map(n => i18n.getFixedT(null, n))
}
