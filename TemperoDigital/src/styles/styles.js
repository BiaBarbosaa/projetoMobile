import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#1E5853',      // verde-escuro do layout
  accent: '#F2D49D',       // amarelo claro dos botões
  bg: '#F1EFEF',           // fundo claro
  card: '#FFFFFF',
  text: '#222222',
  muted: '#8A8A8A',
  danger: '#E17A7A',
  success: '#4BB543'
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 16
  },
  center: { alignItems: 'center', justifyContent: 'center' },
  input: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginVertical: 8,
    fontSize: 16
  },
  bigButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12
  },
  bigButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  smallText: { color: COLORS.muted, fontSize: 12 },
  title: { fontSize: 22, fontWeight: '700', color: COLORS.text, marginBottom: 8 },
  subtitle: { color: COLORS.muted, fontSize: 14 },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 12,
    marginVertical: 8,
    elevation: 2
  }
});