import { useTranslation } from 'next-i18next'
import { withNamespaces } from 'libs/utils/i18next'

export function useNamespaces(namespaces: string[]) {
  const { t } = useTranslation(namespaces)
  return withNamespaces(t, namespaces)
}
