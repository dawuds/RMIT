import json

with open('RMIT/controls/library.json', 'r') as f:
    library = json.load(f)

# Domain: third-party-management
for c in library['third-party-management']:
    if c['slug'] == 'vendor-risk-assessment':
        c['clauses'] = ['10.46', '10.47']
    elif c['slug'] == 'outsourcing-governance':
        c['clauses'] = ['10.46']
    elif c['slug'] == 'sla-monitoring':
        c['clauses'] = ['10.48']
    elif c['slug'] == 'vendor-exit-strategy':
        c['clauses'] = ['10.46'] # Exit is usually part of general management/contract

# Domain: network-security
for c in library['network-security']:
    if c['slug'] == 'network-architecture-and-segmentation':
        c['clauses'] = ['10.36', '10.43']
    elif c['slug'] == 'firewall-management':
        c['clauses'] = ['10.38']
    elif c['slug'] == 'intrusion-detection-and-prevention':
        c['clauses'] = ['10.40']
    elif c['slug'] == 'wireless-security':
        c['clauses'] = ['10.40']
    elif c['slug'] == 'remote-access-security':
        c['clauses'] = ['10.40']
    elif c['slug'] == 'dns-security':
        c['clauses'] = ['10.40']
    elif c['slug'] == 'network-monitoring':
        c['clauses'] = ['10.39', '10.42']

# Domain: digital-services
for c in library['digital-services']:
    if c['slug'] == 'digital-channel-security':
        c['clauses'] = ['12.1']
    elif c['slug'] == 'mobile-application-security':
        c['clauses'] = ['12.1']
    elif c['slug'] == 'api-security':
        c['clauses'] = ['12.1']
    elif c['slug'] == 'customer-authentication':
        c['clauses'] = ['12.4']
    elif c['slug'] == 'transaction-verification':
        c['clauses'] = ['12.1']
    elif c['slug'] == 'session-management':
        c['clauses'] = ['12.1']
    elif c['slug'] == 'fraud-detection':
        c['clauses'] = ['12.4']
    elif c['slug'] == 'qr-code-and-ewallet-security':
        c['clauses'] = ['12.1']

# Domain: assurance-and-compliance
for c in library['assurance-and-compliance']:
    if c['slug'] == 'it-audit-program':
        c['clauses'] = ['13.1', '13.2']
    elif c['slug'] == 'it-audit-independence-and-competency':
        c['clauses'] = ['13.3']
    elif c['slug'] == 'third-party-security-assessment':
        c['clauses'] = ['14.1', '14.2']
    elif c['slug'] == 'incident-notification-framework':
        c['clauses'] = ['11.18', '16.1']
    elif c['slug'] == 'annual-technology-risk-reporting':
        c['clauses'] = ['16.7'] # Should be RMIT Self Assessment / Annual Reporting
    elif c['slug'] == 'rmit-self-assessment':
        c['clauses'] = ['18.1']

with open('RMIT/controls/library.json', 'w') as f:
    json.dump(library, f, indent=2)

print("Batch 2 of control re-alignment completed.")
