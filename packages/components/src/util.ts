export const getProps = (test: (s: string) => any) => (
  props: Record<string, any>
) => {
  const next: Record<string, any> = {}
  for (const key in props) {
    if (test(key || '')) next[key] = props[key]
  }
  return next
}

const MRE = /^m[trblxy]?$/

export const getMargin = getProps(k => MRE.test(k))
export const omitMargin = getProps(k => !MRE.test(k))
