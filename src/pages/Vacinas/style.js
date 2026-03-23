import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC'
  },

  // Header
  header: {
    backgroundColor: '#4A90E2',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerContent: {
    flexDirection: 'row', alignItems:
      'center'
  },
  headerLogo: {
    width: 45, height: 45,
    marginRight: 12
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 0.5
  },
  btnLogout: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 8, borderRadius: 12
  },

  // Filtros
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 20,
    paddingHorizontal: 20
  },
  filterBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 16,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 8
  },


  filterBtnActiveHomem:
  {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2'
  },
  
  filterBtnActiveMulher: {
    backgroundColor: '#FF85A1',
    borderColor: '#FF85A1'
  },

  filterIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  filterText: {
    fontWeight: '700',
    color: '#4A5568',
    fontSize: 14
  },

  filterTextActive: { color: '#FFF' },
  // Card
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  cardAccent: {
    width: 6
  },

  cardContent: {
    flex: 1,
    padding: 18
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6
  },
  vacinaNome: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#2D3748'
  },
  vacinaDose: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '700',
    marginBottom: 8
  },
  vacinaDesc: {
    fontSize: 13,
    color: '#718096',
    lineHeight: 18
  },

  // Badges
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },
  badgeTodos: {
    backgroundColor: '#EDF2F7'
  },
  badgeMulher: {
    backgroundColor: '#FFF5F7'
  },
  badgeHomem: {
    backgroundColor: '#EBF8FF'
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4A5568'
  }
});