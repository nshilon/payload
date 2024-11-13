import type { DefaultTranslationsObject, Language } from '../types.js'

export const itTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Account',
    accountOfCurrentUser: "Account dell'utente corrente",
    accountVerified: 'Account verificato con successo.',
    alreadyActivated: 'Già Attivato',
    alreadyLoggedIn: 'Sei già loggato',
    apiKey: 'Chiave API',
    authenticated: 'Autenticato',
    backToLogin: 'Torna al login',
    beginCreateFirstUser: 'Per iniziare, crea il tuo primo utente.',
    changePassword: 'Cambia Password',
    checkYourEmailForPasswordReset:
      'Controlla la tua email e clicca sul link che ti permetterà di cambiare in sicurezza la tua password.',
    confirmGeneration: 'Conferma Generazione',
    confirmPassword: 'Conferma Password',
    createFirstUser: 'Crea il primo utente',
    emailNotValid: "L'email fornita non è valida",
    emailOrUsername: 'Email o Nome utente',
    emailSent: 'Email Inviata',
    emailVerified: 'Email verificata con successo.',
    enableAPIKey: 'Abilita la Chiave API',
    failedToUnlock: 'Lo sblocco è fallito',
    forceUnlock: 'Forza Sblocco',
    forgotPassword: 'Cambia Password',
    forgotPasswordEmailInstructions:
      'Inserisci la tua mail qui sotto. Riceverai un messaggio email con le istruzioni su come cambiare la tua password.',
    forgotPasswordQuestion: 'Password dimenticata?',
    forgotPasswordUsernameInstructions:
      "Inserisci il tuo nome utente qui sotto. Le istruzioni su come reimpostare la tua password verranno inviate all'indirizzo email associato al tuo nome utente.",
    generate: 'Genera',
    generateNewAPIKey: 'Genera una nuova Chiave API',
    generatingNewAPIKeyWillInvalidate:
      'Generando una nuova chiave API si <1>invaliderà</1> la chiave precedente. Sei sicuro di voler continuare?',
    lockUntil: 'Sblocca Fino',
    logBackIn: 'Vai al Log in',
    loggedIn: 'Per accedere con un altro utente, devi prima <0>uscire</0>.',
    loggedInChangePassword:
      'Per cambiare la tua password, vai al tuo <0>account</0> e modifica la tua password lì.',
    loggedOutInactivity: 'Sei stato disconnesso automaticamente per inattività.',
    loggedOutSuccessfully: 'Sei stato disconnesso con successo.',
    loggingOut: 'Disconnessione in corso...',
    login: 'Login',
    loginAttempts: 'Tentativi di Login',
    loginUser: 'Utente Login',
    loginWithAnotherUser: 'Per accedere con un altro utente, devi prima <0>uscire</0>.',
    logOut: 'Log out',
    logout: 'Logout',
    logoutSuccessful: 'Disconnessione riuscita.',
    logoutUser: 'Logout utente',
    newAccountCreated:
      'Un nuovo account è appena stato creato per te per accedere a <a href="{{serverURL}}">{{serverURL}}</a> Clicca sul seguente link o incolla l\'URL qui sotto nel browser per verificare la tua email: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Dopo aver verificato la tua email, sarai in grado di effettuare il log in con successo.',
    newAPIKeyGenerated: 'Nuova Chiave API Generata.',
    newPassword: 'Nuova Password',
    passed: 'Autenticazione Superata',
    passwordResetSuccessfully: 'Reset della password eseguito con successo.',
    resetPassword: 'Modifica Password',
    resetPasswordExpiration: 'Reimposta Scadenza Password',
    resetPasswordToken: 'Reimposta il Password Token',
    resetYourPassword: 'Modifica la tua Password',
    stayLoggedIn: 'Rimani connesso',
    successfullyRegisteredFirstUser: 'Primo utente registrato con successo.',
    successfullyUnlocked: 'Sbloccato con successo',
    tokenRefreshSuccessful: 'Aggiornamento del token riuscito.',
    unableToVerify: 'Impossibile verificare',
    username: 'Nome utente',
    usernameNotValid: 'Il nome utente fornito non è valido',
    verified: 'Verificato',
    verifiedSuccessfully: 'Verificato con successo',
    verify: 'Verifica',
    verifyUser: 'Verifica Utente',
    verifyYourEmail: 'Verifica la tua email',
    youAreInactive:
      "Non sei attivo da un po' di tempo e a breve verrai disconnesso automaticamente per la tua sicurezza. Vuoi rimanere connesso?",
    youAreReceivingResetPassword:
      'Ricevi questo messaggio perché tu (o qualcun altro) hai richiesto la modifica della password per il tuo account. Clicca sul seguente link o incollalo nel browser per completare il processo:',
    youDidNotRequestPassword:
      "Se non l'hai richiesto, ignora questa email e la tua password rimarrà invariata.",
  },
  error: {
    accountAlreadyActivated: 'Questo account è già stato attivato.',
    autosaving:
      'Si è verificato un problema durante il salvataggio automatico di questo documento.',
    correctInvalidFields: 'Per favore correggi i campi non validi.',
    deletingFile: "Si è verificato un errore durante l'eleminazione del file.",
    deletingTitle:
      "Si è verificato un errore durante l'eliminazione di {{title}}. Per favore controlla la tua connessione e riprova.",
    emailOrPasswordIncorrect: "L'email o la password fornita non è corretta.",
    followingFieldsInvalid_one: 'Il seguente campo non è valido:',
    followingFieldsInvalid_other: 'I seguenti campi non sono validi:',
    incorrectCollection: 'Collezione non corretta',
    invalidFileType: 'Tipo di file non valido',
    invalidFileTypeValue: 'Tipo di file non valido: {{value}}',
    loadingDocument:
      'Si è verificato un problema durante il caricamento del documento con ID {{id}}.',
    localesNotSaved_one: 'Non è stato possibile salvare la seguente impostazione locale:',
    localesNotSaved_other: 'Non è stato possibile salvare le seguenti impostazioni locali:',
    logoutFailed: 'Disconnessione non riuscita.',
    missingEmail: 'Email mancante.',
    missingIDOfDocument: 'ID del documento da aggiornare mancante.',
    missingIDOfVersion: 'ID della versione mancante.',
    missingRequiredData: 'Data mancante.',
    noFilesUploaded: 'Nessun file è stato caricato.',
    noMatchedField: 'Nessun campo corrispondente trovato per "{{label}}"',
    notAllowedToAccessPage: 'Non sei autorizzato ad accedere a questa pagina.',
    notAllowedToPerformAction: 'Non sei autorizzato a eseguire questa azione.',
    notFound: 'La risorsa richiesta non è stata trovata.',
    noUser: 'Nessun Utente',
    previewing: "Si è verificato un problema durante l'anteprima di questo documento.",
    problemUploadingFile: 'Si è verificato un problema durante il caricamento del file.',
    tokenInvalidOrExpired: 'Il token non è valido o è scaduto.',
    tokenNotProvided: 'Token non fornito.',
    unableToDeleteCount: 'Impossibile eliminare {{count}} su {{total}} {{label}}.',
    unableToUpdateCount: 'Impossibile aggiornare {{count}} su {{total}} {{label}}.',
    unauthorized: 'Non autorizzato, devi essere loggato per effettuare questa richiesta.',
    unknown: 'Si è verificato un errore sconosciuto.',
    unPublishingDocument:
      "Si è verificato un problema durante l'annullamento della pubblicazione di questo documento.",
    unspecific: 'Si è verificato un errore.',
    userEmailAlreadyRegistered: "Un utente con l'email fornita è già registrato.",
    userLocked: 'Questo utente è bloccato a causa di troppi tentativi di accesso non riusciti.',
    usernameAlreadyRegistered: 'Un utente con il nome utente fornito è già registrato.',
    usernameOrPasswordIncorrect: 'Il nome utente o la password forniti sono incorretti.',
    valueMustBeUnique: 'Il valore deve essere univoco',
    verificationTokenInvalid: 'Il token di verifica non è valido.',
  },
  fields: {
    addLabel: 'Aggiungi {{label}}',
    addLink: 'Aggiungi Collegamento',
    addNew: 'Aggiungi nuovo',
    addNewLabel: 'Aggiungi nuovo {{label}}',
    addRelationship: 'Aggiungi Relazione',
    addUpload: 'aggiungi Carica',
    block: 'blocco',
    blocks: 'blocchi',
    blockType: 'Tipo di Blocco',
    chooseBetweenCustomTextOrDocument:
      "Scegli tra l'inserimento di un URL di testo personalizzato o il collegamento a un altro documento.",
    chooseDocumentToLink: 'Scegli un documento a cui collegarti',
    chooseFromExisting: 'Scegli tra esistente',
    chooseLabel: 'Scegli {{label}}',
    collapseAll: 'Comprimi tutto',
    customURL: 'URL personalizzato',
    editLabelData: 'Modifica i dati di {{label}}',
    editLink: 'Modifica Collegamento',
    editRelationship: 'Modifica Relazione',
    enterURL: 'Inserisci un URL',
    internalLink: 'Collegamento interno',
    itemsAndMore: '{{items}} e altri {{count}}',
    labelRelationship: 'Relazione {{label}}',
    latitude: 'Latitudine',
    linkedTo: 'Collegato a <0>{{label}}</0>',
    linkType: 'Tipo di collegamento',
    longitude: 'Longitudine',
    newLabel: 'Nuovo {{label}}',
    openInNewTab: 'Apri in una nuova scheda',
    passwordsDoNotMatch: 'Le password non corrispondono.',
    relatedDocument: 'Documento Correlato',
    relationTo: 'Correla a',
    removeRelationship: 'Rimuovi Relazione',
    removeUpload: 'Rimuovi Upload',
    saveChanges: 'Salva modifiche',
    searchForBlock: 'Cerca un blocco',
    selectExistingLabel: 'Seleziona {{label}} esistente',
    selectFieldsToEdit: 'Seleziona i campi da modificare',
    showAll: 'Mostra tutto',
    swapRelationship: 'Cambia Relationship',
    swapUpload: 'Cambia Upload',
    textToDisplay: 'Testo da visualizzare',
    toggleBlock: 'Apri/chiudi blocco',
    uploadNewLabel: 'Carica nuovo {{label}}',
  },
  general: {
    aboutToDelete: 'Stai per eliminare {{label}} <1>{{title}}</1>. Sei sicuro?',
    aboutToDeleteCount_many: 'Stai per eliminare {{count}} {{label}}',
    aboutToDeleteCount_one: 'Stai per eliminare {{count}} {{label}}',
    aboutToDeleteCount_other: 'Stai per eliminare {{count}} {{label}}',
    addBelow: 'Aggiungi sotto',
    addFilter: 'Aggiungi Filtro',
    adminTheme: 'Tema Admin',
    and: 'E',
    anotherUser: 'Un altro utente',
    anotherUserTakenOver:
      'Un altro utente ha preso il controllo della modifica di questo documento.',
    applyChanges: 'Applica modifiche',
    ascending: 'Ascendente',
    automatic: 'Automatico',
    backToDashboard: 'Torna alla Dashboard',
    cancel: 'Cancella',
    changesNotSaved: 'Le tue modifiche non sono state salvate. Se esci ora, verranno perse.',
    clearAll: 'Cancella Tutto',
    close: 'Chiudere',
    collapse: 'Comprimi',
    collections: 'Collezioni',
    columns: 'Colonne',
    columnToSort: 'Colonna da Ordinare',
    confirm: 'Conferma',
    confirmCopy: 'Conferma copia',
    confirmDeletion: "Conferma l'eliminazione",
    confirmDuplication: 'Conferma la duplicazione',
    copied: 'Copiato',
    copy: 'Copia',
    copying: 'Copia',
    copyWarning: 'Stai per sovrascrivere {{to}} con {{from}} per {{label}} {{title}}. Sei sicuro?',
    create: 'Crea',
    created: 'Data di creazione',
    createdAt: 'Creato il',
    createNew: 'Crea Nuovo',
    createNewLabel: 'Crea nuovo {{label}}',
    creating: 'Crea nuovo',
    creatingNewLabel: 'Creazione di un nuovo {{label}}',
    currentlyEditing:
      'sta attualmente modificando questo documento. Se prendi il controllo, verranno bloccati dal continuare a modificare e potrebbero anche perdere le modifiche non salvate.',
    custom: 'Personalizzato',
    dark: 'Scuro',
    dashboard: 'Dashboard',
    delete: 'Elimina',
    deletedCountSuccessfully: '{{count}} {{label}} eliminato con successo.',
    deletedSuccessfully: 'Eliminato con successo.',
    deleting: 'Sto eliminando...',
    depth: 'Profondità',
    descending: 'Decrescente',
    deselectAllRows: 'Deseleziona tutte le righe',
    document: 'Documento',
    documentLocked: 'Documento bloccato',
    documents: 'Documenti',
    duplicate: 'Duplica',
    duplicateWithoutSaving: 'Duplica senza salvare le modifiche',
    edit: 'Modificare',
    editedSince: 'Modificato da',
    editing: 'Modifica',
    editingLabel_many: 'Modificare {{count}} {{label}}',
    editingLabel_one: 'Modifica {{count}} {{label}}',
    editingLabel_other: 'Modificare {{count}} {{label}}',
    editingTakenOver: 'Modifica presa in carico',
    editLabel: 'Modifica {{label}}',
    email: 'Email',
    emailAddress: 'Indirizzo Email',
    enterAValue: 'Inserisci un valore',
    error: 'Errore',
    errors: 'Errori',
    fallbackToDefaultLocale: 'Fallback al locale predefinito',
    false: 'Falso',
    filter: 'Filtro',
    filters: 'Filtri',
    filterWhere: 'Filtra {{label}} se',
    globals: 'Globali',
    goBack: 'Torna indietro',
    isEditing: 'sta modificando',
    language: 'Lingua',
    lastModified: 'Ultima modifica',
    leaveAnyway: 'Esci comunque',
    leaveWithoutSaving: 'Esci senza salvare',
    light: 'Chiaro',
    livePreview: 'Anteprima dal vivo',
    loading: 'Caricamento',
    locale: 'Locale',
    locales: 'Localizzazioni',
    menu: 'Menù',
    moveDown: 'Sposta sotto',
    moveUp: 'Sposta sopra',
    newPassword: 'Nuova Password',
    next: 'Successivo',
    noFiltersSet: 'Nessun filtro impostato',
    noLabel: '<No {{label}}>',
    none: 'Nessuno',
    noOptions: 'Nessuna opzione',
    noResults:
      'Nessun {{label}} trovato. Non esiste ancora nessun {{label}} oppure nessuno corrisponde ai filtri che hai specificato sopra.',
    notFound: 'Non Trovato',
    nothingFound: 'Non è stato trovato nulla',
    noValue: 'Nessun valore',
    of: 'di',
    only: 'Solo',
    open: 'Apri',
    or: 'Oppure',
    order: 'Ordine',
    pageNotFound: 'Pagina non trovata',
    password: 'Password',
    payloadSettings: 'Impostazioni di Payload',
    perPage: 'Per Pagina: {{limit}}',
    previous: 'Precedente',
    remove: 'Rimuovi',
    reset: 'Ripristina',
    row: 'Riga',
    rows: 'Righe',
    save: 'Salva',
    saving: 'Salvo...',
    searchBy: 'Cerca per {{label}}',
    selectAll: 'Seleziona tutto {{count}} {{label}}',
    selectAllRows: 'Seleziona tutte le righe',
    selectedCount: '{{count}} {{label}} selezionato',
    selectValue: 'Seleziona un valore',
    showAllLabel: 'Mostra tutti {{label}}',
    sorryNotFound: "Siamo spiacenti, non c'è nulla che corrisponda alla tua richiesta.",
    sort: 'Ordina',
    sortByLabelDirection: 'Ordina per {{label}} {{direction}}',
    stayOnThisPage: 'Rimani su questa pagina',
    submissionSuccessful: 'Invio riuscito.',
    submit: 'Invia',
    submitting: 'Inviando...',
    success: 'Successo',
    successfullyCreated: '{{label}} creato con successo.',
    successfullyDuplicated: '{{label}} duplicato con successo.',
    takeOver: 'Prendi il controllo',
    thisLanguage: 'Italiano',
    titleDeleted: '{{label}} {{title}} eliminato con successo.',
    true: 'Vero',
    unauthorized: 'Non autorizzato',
    unsavedChanges: 'Hai delle modifiche non salvate. Salva o scarta prima di continuare.',
    unsavedChangesDuplicate: 'Sono presenti modifiche non salvate. Vuoi continuare a duplicare?',
    untitled: 'Senza titolo',
    updatedAt: 'Aggiornato il',
    updatedCountSuccessfully: '{{count}} {{label}} aggiornato con successo.',
    updatedSuccessfully: 'Aggiornato con successo.',
    updating: 'Aggiornamento',
    uploading: 'Caricamento',
    uploadingBulk: 'Caricamento {{current}} di {{total}}',
    user: 'Utente',
    username: 'Nome utente',
    users: 'Utenti',
    value: 'Valore',
    viewReadOnly: 'Visualizza solo lettura',
    welcome: 'Benvenuto',
  },
  operators: {
    contains: 'contiene',
    equals: 'uguale',
    exists: 'esiste',
    intersects: 'interseca',
    isGreaterThan: 'è maggiore di',
    isGreaterThanOrEqualTo: 'è maggiore o uguale a',
    isIn: 'è in',
    isLessThan: 'è minore di',
    isLessThanOrEqualTo: 'è minore o uguale a',
    isLike: 'è come',
    isNotEqualTo: 'non è uguale a',
    isNotIn: 'non è in',
    near: 'vicino',
    within: "all'interno",
  },
  upload: {
    addFile: 'Aggiungi file',
    addFiles: 'Aggiungi File',
    bulkUpload: 'Caricamento in Blocco',
    crop: 'Raccolto',
    cropToolDescription:
      "Trascina gli angoli dell'area selezionata, disegna una nuova area o regola i valori qui sotto.",
    dragAndDrop: 'Trascina e rilascia un file',
    dragAndDropHere: 'oppure trascina e rilascia un file qui',
    editImage: 'Modifica immagine',
    fileName: 'Nome File',
    fileSize: 'Dimensione File',
    filesToUpload: 'File da caricare',
    fileToUpload: 'File da caricare',
    focalPoint: 'Punto Focale',
    focalPointDescription:
      "Trascina il punto focale direttamente sull'anteprima o regola i valori sottostanti.",
    height: 'Altezza',
    lessInfo: 'Meno info',
    moreInfo: 'Più info',
    pasteURL: 'Incolla URL',
    previewSizes: 'Anteprime Dimensioni',
    selectCollectionToBrowse: 'Seleziona una Collezione da Sfogliare',
    selectFile: 'Seleziona un file',
    setCropArea: 'Imposta area di ritaglio',
    setFocalPoint: 'Imposta punto focale',
    sizes: 'Formati',
    sizesFor: 'Dimensioni per {{label}}',
    width: 'Larghezza',
  },
  validation: {
    emailAddress: 'Si prega di inserire un indirizzo email valido.',
    enterNumber: 'Si prega di inserire un numero valido.',
    fieldHasNo: 'Questo campo non ha {{label}}',
    greaterThanMax: '{{value}} è superiore al massimo consentito {{label}} di {{max}}.',
    invalidInput: 'Questo campo ha un input non valido.',
    invalidSelection: 'Questo campo ha una selezione non valida.',
    invalidSelections: "'In questo campo sono presenti le seguenti selezioni non valide:'",
    lessThanMin: '{{value}} è inferiore al minimo consentito {{label}} di {{min}}.',
    limitReached: 'Raggiunto il limite, possono essere aggiunti solo {{max}} elementi.',
    longerThanMin:
      'Questo valore deve essere più lungo della lunghezza minima di {{minLength}} caratteri.',
    notValidDate: '"{{value}}" non è una data valida.',
    required: 'Questo campo è obbligatorio.',
    requiresAtLeast: 'Questo campo richiede almeno {{count}} {{label}}.',
    requiresNoMoreThan: 'Questo campo richiede non più di {{count}} {{label}}.',
    requiresTwoNumbers: 'Questo campo richiede due numeri.',
    shorterThanMax:
      'Questo valore deve essere inferiore alla lunghezza massima di {{maxLength}} caratteri.',
    trueOrFalse: "Questo campo può essere solo uguale a 'true' o 'false'.",
    username:
      'Inserisci un nome utente valido. Può contenere lettere, numeri, trattini, punti e underscore.',
    validUploadID: "'Questo campo non è un ID di Upload valido.'",
  },
  version: {
    type: 'Tipo',
    aboutToPublishSelection: 'Stai per pubblicare tutte le {{label}} nella selezione. Sei sicuro?',
    aboutToRestore:
      'Stai per ripristinare questo documento {{label}} allo stato in cui si trovava il {{versionDate}}.',
    aboutToRestoreGlobal:
      'Stai per ripristinare {{label}} allo stato in cui si trovava il {{versionDate}}.',
    aboutToRevertToPublished:
      'Stai per ripristinare le modifiche di questo documento al suo stato pubblicato. Sei sicuro?',
    aboutToUnpublish: 'Stai per annullare la pubblicazione di questo documento. Sei sicuro?',
    aboutToUnpublishSelection:
      'Stai per annullare la pubblicazione di tutte le {{label}} nella selezione. Sei sicuro?',
    autosave: 'Salvataggio automatico',
    autosavedSuccessfully: 'Salvataggio automatico riuscito.',
    autosavedVersion: 'Versione salvata automaticamente',
    changed: 'Modificato',
    compareVersion: 'Confronta versione con:',
    confirmPublish: 'Conferma la pubblicazione',
    confirmRevertToSaved: 'Conferma il ripristino dei salvataggi',
    confirmUnpublish: 'Conferma annullamento della pubblicazione',
    confirmVersionRestoration: 'Conferma il ripristino della versione',
    currentDocumentStatus: 'Documento {{docStatus}} corrente',
    currentDraft: 'Bozza Corrente',
    currentPublishedVersion: 'Versione Pubblicata Attuale',
    draft: 'Bozza',
    draftSavedSuccessfully: 'Bozza salvata con successo.',
    lastSavedAgo: 'Ultimo salvataggio {{distance}} fa',
    noFurtherVersionsFound: 'Non sono state trovate ulteriori versioni',
    noRowsFound: 'Nessun {{label}} trovato',
    noRowsSelected: 'Nessuna {{etichetta}} selezionata',
    preview: 'Anteprima',
    previouslyPublished: 'Precedentemente Pubblicato',
    problemRestoringVersion: 'Si è verificato un problema durante il ripristino di questa versione',
    publish: 'Pubblicare',
    publishChanges: 'Pubblica modifiche',
    published: 'Pubblicato',
    publishIn: 'Pubblica in {{locale}}',
    publishing: 'Pubblicazione',
    restoreAsDraft: 'Ripristina come bozza',
    restoredSuccessfully: 'Ripristinato con successo.',
    restoreThisVersion: 'Ripristina questa versione',
    restoring: 'Ripristino...',
    reverting: 'Ritorno...',
    revertToPublished: 'Ritorna alla versione pubblicata',
    saveDraft: 'Salva Bozza',
    selectLocales: 'Seleziona le lingue da visualizzare',
    selectVersionToCompare: 'Seleziona una versione da confrontare',
    showingVersionsFor: 'Mostra le versioni per:',
    showLocales: 'Mostra localizzazioni:',
    status: 'Stato',
    unpublish: 'Annulla pubblicazione',
    unpublishing: 'Annullamento pubblicazione...',
    version: 'Versione',
    versionCount_many: '{{count}} versioni trovate',
    versionCount_none: 'Nessuna versione trovata',
    versionCount_one: '{{count}} versione trovata',
    versionCount_other: '{{count}} versioni trovate',
    versionCreatedOn: '{{version}} creata il:',
    versionID: 'ID Versione',
    versions: 'Versioni',
    viewingVersion: 'Visualizzazione della versione per {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: '`Visualizzazione della versione per {{entityLabel}}',
    viewingVersions: 'Visualizzazione delle versioni per {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '`Visualizzazione delle versioni per {{entityLabel}}',
  },
}

export const it: Language = {
  dateFNSKey: 'it',
  translations: itTranslations,
}
