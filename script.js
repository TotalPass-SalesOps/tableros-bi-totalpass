const FALLBACK_DASHBOARDS = [{"id": 1.0, "propiedad": "MX", "nombre": "MX - Planes Subsidiados", "area": "CS", "descripcion": "Muestra información sobre los planes que cuentan con subsidio por parte de la empresa. Permite identificar qué planes tienen copago reducido o cubierto y su distribución entre los colaboradores.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/9a2b964d-500d-4383-bb8c-9e21a5534669"}, {"id": 2.0, "propiedad": "MX", "nombre": "MX - Reporte General", "area": "General", "descripcion": "Panel principal y punto de partida para el análisis del negocio en México. Incluye resumen de activos vs metas, activaciones, cancelaciones, solicitudes de baja, tendencias semanales/mensuales, conversión de clientes Enterprise, y desglose por tamaño de empresa. Contiene hojas de: Resumen General, Activos, Cancelaciones, Activaciones por plan, Dependientes, Gyms/Tokens, Tendencia, General (KPIs financieros), Empresa y Resultados CS.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/84b14737-3896-40df-9ac9-1d9677d595cd"}, {"id": 3.0, "propiedad": "MX", "nombre": "MX - Resultados CS", "area": "CS", "descripcion": "Reporte enfocado en los resultados del equipo de Customer Success. Muestra activos totales, titulares, dependientes, tokens quemados, frecuencia de uso, adhesión, distribución por género, por estado y por plan. Incluye top de gimnasios y grupos de gimnasios más utilizados.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/dc6744cf-16ff-4d83-8b56-939c3e00d381"}, {"id": 4.0, "propiedad": "MX", "nombre": "MX - Activos Acumulados por día", "area": "GYMS", "descripcion": "Visualiza la evolución diaria acumulada de usuarios activos. Permite hacer seguimiento día a día del crecimiento de la base activa.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/0af9718a-46e4-4873-ab92-a96d66afd96a"}, {"id": 5.0, "propiedad": "MX", "nombre": "MX - Análisis RFM", "area": "General", "descripcion": "Análisis de segmentación de usuarios basado en la metodología RFM (Recencia, Frecuencia, Monto/Margen). Clasifica usuarios en segmentos (ej. tóxicos, de alto valor), muestra distribución por plan, top empresas con mayor/menor margen, métricas por segmento y cohort de retención por antigüedad.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/8362e572-c5f0-484c-a409-23c9762e1924"}, {"id": 6.0, "propiedad": "MX", "nombre": "MX - Reporte de Tendencias", "area": "General", "descripcion": "Muestra las tendencias de activaciones y cancelaciones a lo largo del tiempo (diarias, semanales y mensuales), diferenciando entre titulares y dependientes. Permite identificar patrones estacionales y variaciones en la pérdida neta de usuarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/2e980057-4412-48b3-9595-12b791e68b85"}, {"id": 7.0, "propiedad": "MX", "nombre": "MX - Adhesión Histórica", "area": "CS", "descripcion": "Presenta la evolución histórica del porcentaje de adhesión (usuarios activos vs elegibles) a lo largo del tiempo. Útil para evaluar la penetración del beneficio en las empresas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/9f55e457-b2f5-42ca-94c6-f29693616824"}, {"id": 8.0, "propiedad": "MX", "nombre": "MX - 🚀 Comité Usuarios Meta", "area": "General", "descripcion": "Dashboard de seguimiento de la meta de usuarios activos. Incluye resumen general con KPIs de activaciones, cancelaciones y solicitudes; metas mensuales con gauge de progreso; actividad diaria y semanal; desglose por plan; y análisis de cancelaciones por motivo, tamaño de empresa, canal y estado.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ea18f947-9d84-4509-bad1-a24d6a5679f1"}, {"id": 9.0, "propiedad": "BR", "nombre": "Dados Operacionais", "area": "Externo", "descripcion": "Panel operativo (en portugués) que muestra datos operacionales generales del negocio, incluyendo métricas de operación diaria.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/70245927-ae26-48c9-80fe-864d53f8cb41"}, {"id": 10.0, "propiedad": "BR", "nombre": "Análise de Ativos", "area": "Externo", "descripcion": "Análisis de la base de usuarios activos (en portugués). Permite visualizar la composición y evolución de los activos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/17d21267-43b5-49e0-88d8-028ccf5fa055"}, {"id": 11.0, "propiedad": "BR", "nombre": "[MX] Resumo Gerencial - Empresas", "area": "Externo", "descripcion": "Resumen gerencial por empresa para México. Presenta indicadores clave de cada empresa cliente: activos, adhesión, cancelaciones y métricas de salud de la cuenta.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/f5001d12-c72c-4d1e-bdbe-4e9240d63aee"}, {"id": 12.0, "propiedad": "BR", "nombre": "Ações de Implantação - Adesões", "area": "Externo", "descripcion": "Seguimiento de las acciones de implementación y adhesiones en empresas nuevas o en proceso de onboarding. Mide el éxito de las estrategias de lanzamiento.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/93e60804-ce1b-4dbc-9779-3983f3b9fdca"}, {"id": 13.0, "propiedad": "MX", "nombre": "MX - Elegibles sin subscripción", "area": "CS", "descripcion": "Identifica colaboradores elegibles (titulares y dependientes) que aún no han activado su suscripción. Segmenta por antigüedad de registro y empresa. Útil para campañas de activación.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/b296707f-b76a-4bd8-8509-2f06175834a6"}, {"id": 14.0, "propiedad": "BR", "nombre": "Acompanhamento de Metas - BR", "area": "Externo", "descripcion": "Seguimiento de metas para Brasil. Muestra el avance hacia los objetivos establecidos del mercado brasileño.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/4346d198-a9a0-47cc-9a12-e8e9858fc9f5"}, {"id": 15.0, "propiedad": "BR", "nombre": "[MX] Descripción general de la cartera de clientes", "area": "Externo", "descripcion": "Vista panorámica de la cartera de clientes corporativos en México. Incluye información de empresas activas, tamaño, adhesión y estado general de cada cuenta.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c0cff8c9-829a-409d-8b6e-804a2f01958e"}, {"id": 16.0, "propiedad": "BR", "nombre": "Acompanhamento de Carteira", "area": "Externo", "descripcion": "Seguimiento de la cartera de clientes. Permite monitorear la salud y evolución de las cuentas asignadas a cada ejecutivo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/08e34e9e-090e-4bf7-be8e-38bdead5b919"}, {"id": 17.0, "propiedad": "MX", "nombre": "MX - Tag Token", "area": "GYMS", "descripcion": "Muestra el etiquetado y clasificación de tokens (visitas a gimnasios) por diferentes categorías. Permite analizar patrones de uso por tipo de actividad o modalidad.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/d501b2e5-a15c-4f63-94fe-f5f8a1ac5c68"}, {"id": 18.0, "propiedad": "MX", "nombre": "MX - Leads Salesforce", "area": "B2B", "descripcion": "Visualiza los leads provenientes de Salesforce para el equipo comercial de México. Permite dar seguimiento al pipeline de ventas y nuevos prospectos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/1b458f37-5a1c-4b02-8105-cd9c5c439303"}, {"id": 19.0, "propiedad": "BR", "nombre": "Academias Totalpass", "area": "Externo", "descripcion": "Directorio y métricas de los gimnasios (academias) asociados a Totalpass. Incluye información de contacto, estado y actividad de cada gimnasio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/44dab376-07a2-4283-a069-53b3062e0667"}, {"id": 20.0, "propiedad": "BR", "nombre": "Repasse Academias", "area": "Externo", "descripcion": "Muestra el repasse (pago/transferencia) realizado a los gimnasios por las visitas de los usuarios. Permite analizar cuánto se paga a cada academia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/96c235dc-0c30-407a-beb5-c25be7976701"}, {"id": 21.0, "propiedad": "BR", "nombre": "Dashboard Flywheel MX", "area": "Externo", "descripcion": "Visualiza el modelo Flywheel (volante de inercia) para México: cómo se retroalimentan las métricas clave del negocio (más usuarios → más gyms → mejor experiencia → más usuarios).", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/62962c1e-1ded-4b8e-84fb-a12396575a14"}, {"id": 22.0, "propiedad": "MX", "nombre": "Daily Gym Token Alert", "area": "GYMS", "descripcion": "Sistema de alertas diarias sobre tokens en gimnasios. Identifica anomalías o picos inusuales en el uso de tokens que requieran atención inmediata.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/f1c180d9-e2d5-4c98-8c95-30a53d85d83c"}, {"id": 23.0, "propiedad": "BR", "nombre": "Acompanhamento TP Lite", "area": "Externo", "descripcion": "Seguimiento del producto TotalPass Lite. Muestra métricas de adopción, uso y desempeño de esta modalidad de plan.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/27857ce2-ca84-48d4-9dff-4ba8633e6c64"}, {"id": 24.0, "propiedad": "MX", "nombre": "MX - Suscripciones Junio 2026", "area": "CS", "descripcion": "Reporte específico de suscripciones del mes de junio 2026. Muestra el detalle de altas, bajas y estado de las suscripciones en ese periodo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/588a17b9-6e4d-49a9-9e31-8dbe64088747"}, {"id": 25.0, "propiedad": "BR", "nombre": "Relatório Assinaturas Alelo TP Lite", "area": "Externo", "descripcion": "Reporte de suscripciones del canal Alelo para el producto TP Lite. Muestra el desempeño de este canal de distribución específico.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/06971809-1012-40a5-bb6a-dcabfcc27aad"}, {"id": 26.0, "propiedad": "MX", "nombre": "MX - Gimnasios Cercanos", "area": "GYMS", "descripcion": "Herramienta de análisis geográfico que muestra la cercanía de gimnasios respecto a los usuarios o empresas. Útil para evaluar cobertura y accesibilidad.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e8de23cc-3436-46e5-bf65-720cdaca4a79"}, {"id": 27.0, "propiedad": "MX", "nombre": "MX - Adhesión Detallada", "area": "CS", "descripcion": "Análisis detallado de la adhesión (porcentaje de uso del beneficio) por empresa. Permite profundizar en qué empresas tienen mayor o menor penetración del servicio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ec14b7b1-fbdb-424d-bf0b-7af55e53fb06"}, {"id": 28.0, "propiedad": "MX", "nombre": "TP-MX Tokens (Alteraciones) y Copay", "area": "GYMS", "descripcion": "Muestra las alteraciones (cambios) en tokens y el copay (pago del usuario) en México. Permite analizar cambios de plan, upgrades/downgrades y su impacto en el copay.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/6f917e74-93d4-4c15-973e-3a9347cf5bd8"}, {"id": 29.0, "propiedad": "MX", "nombre": "MX - Tabla Actualización Salesforce", "area": "Ops", "descripcion": "Panel de monitoreo de la sincronización de datos entre el sistema Admin y Salesforce. Verifica que la información esté actualizada y consistente entre ambos sistemas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/6f61cd04-8084-4d57-9d2d-dc560e5f8358"}, {"id": 30.0, "propiedad": "MX", "nombre": "MX · Activos con Ciclo Vencido y Uso Post-Ciclo", "area": "CS", "descripcion": "Identifica usuarios que siguen activos pero cuyo ciclo de pago ya venció, y aquellos que han usado el servicio después del vencimiento de su ciclo. Útil para control de cobros.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/05619d75-2156-41c6-8065-59b0c7474a73"}, {"id": 31.0, "propiedad": "MX", "nombre": "INVESTIGACIÓN: Empleados de BENEFICIO EXTENDIDO", "area": "CS", "descripcion": "Análisis de empleados que se encuentran en estatus de \"beneficio extendido\" (periodo de gracia post-cancelación de la empresa). Investiga el impacto y comportamiento de estos usuarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/06ea479c-f3cd-4e29-ac56-e604b8472b8c"}, {"id": 32.0, "propiedad": "MX", "nombre": "Directorio Company Groups", "area": "Ops", "descripcion": "Directorio maestro de todos los grupos de empresas (company groups) registrados. Funciona como catálogo de referencia con datos clave de cada grupo empresarial.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/db2d3092-1d4f-4c5b-8a72-f8e13f6bc117"}, {"id": 33.0, "propiedad": "MX", "nombre": "MX - Tabla Propuestas / Renovaciones", "area": "Ops", "descripcion": "Seguimiento de propuestas comerciales y renovaciones de contratos con empresas en México. Permite monitorear el pipeline de renovaciones.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/498faf39-8512-4f92-b3ae-1d996cd74920"}, {"id": 34.0, "propiedad": "MX", "nombre": "MX - Margen Detallado", "area": "CS", "descripcion": "Análisis detallado del margen de rentabilidad. Muestra la diferencia entre lo que paga el usuario (copay) y lo que se paga al gimnasio (repasse), desglosado por empresa, plan y usuario.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/7fdd2bac-2711-4a09-9de3-d1d511a4be54"}, {"id": 35.0, "propiedad": "MX", "nombre": "MX - Legal", "area": "Legal", "descripcion": "Panel con información relevante para el área legal. Puede incluir datos de contratos, cumplimiento normativo o casos legales en curso.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/04c24e8d-b62c-4997-a9b6-bb880fa655ab"}, {"id": 36.0, "propiedad": "MX", "nombre": "MX - Layout", "area": "Ops", "descripcion": "Panel de diseño/maquetación que sirve como plantilla o referencia visual para la creación de nuevos dashboards en México.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e9a8499b-57ec-49b7-91e6-8cdf63d9ed67"}, {"id": 37.0, "propiedad": "BR", "nombre": "TP-MX: Tokens", "area": "GYMS", "descripcion": "Reporte principal de tokens (visitas) en México. Muestra el volumen de check-ins en gimnasios, tendencias de uso y distribución por plan y gimnasio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/0f4ff7ac-2f2b-43a3-958a-092f9f6df0a9"}, {"id": 38.0, "propiedad": "BR", "nombre": "Dashboard de Performance B2B", "area": "B2B", "descripcion": "Métricas de desempeño del canal B2B (venta a empresas). Incluye indicadores de adquisición, retención y crecimiento de cuentas corporativas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/de84733f-5872-4602-a2bb-3488c24d6655"}, {"id": 39.0, "propiedad": "MX", "nombre": "MX - Mapa de calor Empresas / Usuarios", "area": "GYMS", "descripcion": "Visualización geográfica tipo mapa de calor que muestra la concentración de empresas y usuarios por zona geográfica en México.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c781d0fc-9b82-47d9-865e-7fa6fa04d16f"}, {"id": 40.0, "propiedad": "MX", "nombre": "MX - Churn Generals Comparativo", "area": "General", "descripcion": "Análisis comparativo de churn (tasa de cancelación) entre diferentes periodos, segmentos o empresas. Permite identificar tendencias y áreas de mejora en retención.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/178fb8bf-19e6-4316-9c6c-b51f0e6f22f6"}, {"id": 41.0, "propiedad": "MX", "nombre": "Cálculo de Adhesión", "area": "CS", "descripcion": "Herramienta de cálculo del porcentaje de adhesión (activos/elegibles). Muestra la fórmula y resultado de adhesión por empresa y en general.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/9345ff74-a7ac-4437-8158-37179705ceb8"}, {"id": 42.0, "propiedad": "MX", "nombre": "HealthScore V2", "area": "CS", "descripcion": "Versión 2 del indicador de salud de cuentas (Health Score). Califica a cada empresa cliente según múltiples variables (adhesión, uso, churn, satisfacción) para priorizar acciones de CS.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/548448bf-bc79-4f9f-a8bc-d60c3a611b16"}, {"id": 43.0, "propiedad": "MX", "nombre": "[MX] Base de Contactos", "area": "Ops", "descripcion": "Base de datos de contactos específica para México. Incluye información de contacto de empresas clientes para gestión comercial.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/0a649b96-4ba1-4298-ac61-187d3b96e7f8"}, {"id": 44.0, "propiedad": "BR", "nombre": "Ação de Implantação - Adesões v2", "area": "Externo", "descripcion": "Versión 2 del seguimiento de acciones de implementación y adhesiones. Mejora sobre la versión anterior con métricas más detalladas del proceso de onboarding.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/1ff4f8e8-77f1-47d2-b661-035417c96fcf"}, {"id": 45.0, "propiedad": "BR", "nombre": "Promoções", "area": "Externo", "descripcion": "Panel de seguimiento de promociones activas e históricas. Muestra el impacto de las campañas promocionales en activaciones y uso.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ae890b4d-004b-481d-856a-2399c42b2c44"}, {"id": 46.0, "propiedad": "BR", "nombre": "test upgrades", "area": "Externo", "descripcion": "Panel de prueba para analizar upgrades (cambios de plan hacia arriba) de usuarios. Puede estar en fase experimental.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/8dd0091b-010c-497d-ab50-60ebb21fdecf"}, {"id": 47.0, "propiedad": "BR", "nombre": "Academias Ativas e Inativas", "area": "Externo", "descripcion": "Clasificación de gimnasios en activos e inactivos. Permite identificar qué academias están operando y cuáles han dejado de recibir visitas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c7dedd3c-3c5f-4f45-8bd8-d6cf547a633e"}, {"id": 48.0, "propiedad": "MX", "nombre": "MX - Seguimiento TITULARES Y DEPENDIENTES EN BENEFICIO EXTENDIDO", "area": "CS", "descripcion": "Monitoreo específico de titulares y dependientes que se encuentran en periodo de beneficio extendido tras la baja de su empresa. Rastrea su actividad y estatus.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/468aadc3-ecde-4f19-8aff-3e03ee832463"}, {"id": 49.0, "propiedad": "MX", "nombre": "Expansión Mensual", "area": "GYMS", "descripcion": "Seguimiento mensual de la expansión de la red de gimnasios. Muestra nuevas altas de academias y crecimiento de la cobertura geográfica.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/0b688298-e566-4e64-99cb-516d319e8ff9"}, {"id": 50.0, "propiedad": "MX", "nombre": "MX - Tokens Horarios", "area": "GYMS", "descripcion": "Análisis de tokens (visitas) por franja horaria. Muestra en qué horas del día se concentra el uso de los gimnasios para entender patrones de demanda.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/b1ee7fe6-bef5-4e8a-98f9-e398f90119f6"}, {"id": 51.0, "propiedad": "MX", "nombre": "MX - Churn Cohorte", "area": "CS", "descripcion": "Análisis de churn por cohortes. Agrupa usuarios por mes de activación y muestra qué porcentaje se cancela en cada mes subsecuente. Ideal para medir retención a largo plazo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/fd050d35-6496-4b45-84e9-1ec61a1efcac"}, {"id": 52.0, "propiedad": "BR", "nombre": "Resumo Gerencial - Empresas MX", "area": "Externo", "descripcion": "Resumen gerencial de empresas para México. Vista ejecutiva con los indicadores más relevantes de cada cuenta corporativa.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/5c9c07fc-21a3-46d2-a036-fb312df2596d"}, {"id": 53.0, "propiedad": "MX", "nombre": "MX Marketing Activos / Cancelaciones", "area": "Marketing", "descripcion": "Panel para el equipo de Marketing que muestra la relación entre usuarios activos y cancelaciones. Útil para medir el impacto de campañas de retención y adquisición.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/229e7c63-bfb8-42e4-b2af-f64cbf8afb7d"}, {"id": 54.0, "propiedad": "MX", "nombre": "MX - Afectación gyms x bajas de fraude", "area": "GYMS", "descripcion": "Analiza el impacto en los gimnasios cuando se dan de baja usuarios por fraude. Muestra qué academias se ven más afectadas por estas cancelaciones forzadas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/b9b755d7-5e42-4616-8df5-e9b208bef9ca"}, {"id": 55.0, "propiedad": "MX", "nombre": "MX - GYMS estatus", "area": "GYMS", "descripcion": "Estado actual de los gimnasios en México. Muestra cuáles están activos, inactivos, en proceso de alta o con alguna incidencia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/12b38730-674d-4aff-b920-0618572e8456"}, {"id": 56.0, "propiedad": "MX", "nombre": "Flywheel", "area": "General", "descripcion": "Modelo Flywheel general del negocio. Visualiza las métricas interconectadas que impulsan el crecimiento circular de la plataforma.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/fd28971f-551b-45af-811b-45a7ef25f021"}, {"id": 57.0, "propiedad": "BR", "nombre": "Relatório Gerencial", "area": "Externo", "descripcion": "Reporte gerencial general (en portugués). Vista ejecutiva con los principales KPIs del negocio para la alta dirección.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e7e48af2-9a47-4b21-a5e3-4e95f7bfe8e5"}, {"id": 58.0, "propiedad": "BR", "nombre": "MAU and Downloads", "area": "Externo", "descripcion": "Métricas de Monthly Active Users (usuarios activos mensuales en la app) y descargas de la aplicación. Mide la adopción digital del servicio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/f973e531-8492-4d0e-a8b8-5cf956ae1079"}, {"id": 59.0, "propiedad": "BR", "nombre": "Base de Academias - MX", "area": "Externo", "descripcion": "Catálogo completo de gimnasios en México. Incluye datos de ubicación, modalidades, planes aceptados y datos de contacto de cada academia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/82abf6ad-f775-4037-9d2f-eda98028bf53"}, {"id": 60.0, "propiedad": "BR", "nombre": "Conciliação de Cobranças", "area": "Externo", "descripcion": "Conciliación de cobros. Verifica que los pagos cobrados a usuarios coincidan con lo registrado en el sistema. Herramienta financiera de control.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ed002bf7-ea84-44d7-a3cf-5145dcda83a6"}, {"id": 61.0, "propiedad": "MX", "nombre": "MX - Repositorio", "area": "General", "descripcion": "Repositorio central de datos y métricas de México. Funciona como fuente de consulta general para múltiples indicadores.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/626da0d3-3eaf-4dc4-a8c8-232676af77d4"}, {"id": 62.0, "propiedad": "MX", "nombre": "MX - Empresas Registradas (Inf B2B)", "area": "B2B", "descripcion": "Información de empresas registradas en el canal B2B. Muestra el universo de empresas dadas de alta, su estado y datos de contrato.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e63dbf8e-2b35-4bd3-82d2-df1e6d4e6f53"}, {"id": 63.0, "propiedad": "BR", "nombre": "Apps Parceiros", "area": "Externo", "descripcion": "Métricas de uso de aplicaciones de socios (apps parceiros): Queima Diaria, StarBem, ZenApp, SmartFit Coach y Conexa. Muestra consultas, sesiones y utilización por empresa y mes.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/75ee869d-f399-4a43-809c-f980e7d233ee"}, {"id": 64.0, "propiedad": "BR", "nombre": "Adesões e Cancelamentos", "area": "Externo", "descripcion": "Reporte de adhesiones (altas) y cancelaciones (bajas). Muestra el balance entre nuevos usuarios y los que se dan de baja.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/780ecd09-0f7e-41cf-87ff-28de65083eb3"}, {"id": 65.0, "propiedad": "MX", "nombre": "MX - Lo mejor apenas está por comenzar", "area": "Marketing", "descripcion": "Panel motivacional/de presentación que muestra logros y proyecciones positivas del negocio en México. Puede usarse para comunicación interna.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/61b25ba6-0284-4e4f-bfa9-56b3b7ca07bf"}, {"id": 66.0, "propiedad": "MX", "nombre": "MX - Activaciones new", "area": "CS", "descripcion": "Análisis del funnel de activación de nuevos usuarios. Muestra el proceso desde el registro hasta la primera visita, identificando puntos de fricción.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/a5a993aa-dc85-440b-9883-370fc3b75d28"}, {"id": 67.0, "propiedad": "BR", "nombre": "Partner Apps (Portal RH Embedded)", "area": "Externo", "descripcion": "Vista embebida de apps de socios para el Portal de Recursos Humanos. Muestra a las empresas el uso que sus colaboradores hacen de las apps complementarias.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/62804e22-9b29-441d-a0a3-72676e87c654"}, {"id": 68.0, "propiedad": "MX", "nombre": "MX - Monitoreo Company Groups Salesforce vs Admin", "area": "Ops", "descripcion": "Herramienta de monitoreo que compara los datos de Company Groups entre Salesforce y el sistema Admin. Detecta inconsistencias y datos desactualizados.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/dbc10e8e-7784-45b4-a6b8-aaa95c0c803c"}, {"id": 69.0, "propiedad": "MX", "nombre": "MX - Top Users", "area": "People and Culture", "descripcion": "Identifica a los usuarios más activos (top users) por número de visitas y dependientes. Útil para detectar casos de éxito y también posibles abusos del servicio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ba4106ed-a6b4-4568-a461-bb51ced52a51"}, {"id": 70.0, "propiedad": "BR", "nombre": "Acompanhamento de Metas - MX", "area": "Externo", "descripcion": "Seguimiento de metas para México (versión en portugués). Muestra el avance hacia los objetivos establecidos para el mercado mexicano.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/6e81a707-c29d-472e-9490-86a53431f2d0"}, {"id": 71.0, "propiedad": "BR", "nombre": "Relatório Gerencial - Felipe", "area": "Externo", "descripcion": "Reporte gerencial personalizado para un usuario específico. Contiene métricas y vistas adaptadas a sus necesidades de gestión.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c5e3ab78-f048-4eec-9666-8ee97bd5758b"}, {"id": 72.0, "propiedad": "BR", "nombre": "Análise No Shows e Late Cancel", "area": "Externo", "descripcion": "Análisis de \"no shows\" (usuarios que reservan pero no asisten) y cancelaciones tardías. Mide el impacto en la operación de los gimnasios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/beaecdd0-27a8-43ae-ae1f-2b70b202c439"}, {"id": 73.0, "propiedad": "BR", "nombre": "Cobranças Cartão de Crédito", "area": "Externo", "descripcion": "Reporte de cobros con tarjeta de crédito. Muestra el estado de los pagos, rechazos y recuperación de cobros fallidos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/674e1950-0c5e-415b-8184-48d8b31fabdd"}, {"id": 74.0, "propiedad": "BR", "nombre": "Usuários Carentes", "area": "Externo", "descripcion": "Identifica usuarios \"carentes\" (sin actividad reciente o en riesgo de cancelación). Útil para acciones proactivas de retención.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/1988b77a-3990-4e91-9431-f923f63634c2"}, {"id": 75.0, "propiedad": "BR", "nombre": "Apps parceiros e usuários ativos", "area": "Externo", "descripcion": "Relación entre el uso de apps de socios y los usuarios activos. Muestra cuántos usuarios activos utilizan servicios complementarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c05c9d72-0c8b-4b54-8900-f397bf061cb5"}, {"id": 76.0, "propiedad": "BR", "nombre": "Convites de Dependentes", "area": "Externo", "descripcion": "Seguimiento de invitaciones a dependientes. Muestra cuántos titulares han invitado a sus dependientes y el estado de esas invitaciones.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/681a7b03-9c82-455d-8a38-621e6525bb84"}, {"id": 77.0, "propiedad": "BR", "nombre": "Bookings", "area": "Externo", "descripcion": "Panel de reservas en gimnasios. Muestra el volumen de reservas, disponibilidad y patrones de agendamiento de clases.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/730e6f62-c9df-4f2d-8b68-0f5fa19ef7ee"}, {"id": 78.0, "propiedad": "BR", "nombre": "Acompanhamento de Fechamentos - Com ID FRONT", "area": "Externo", "descripcion": "Seguimiento de cierres comerciales (ventas cerradas) con identificador del sistema FRONT. Permite rastrear cada cierre hasta su origen.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c9f579af-57f8-401f-8ddc-0800f9fdf8e5"}, {"id": 79.0, "propiedad": "BR", "nombre": "CX - Validação Usuários", "area": "Externo", "descripcion": "Herramienta del equipo de Customer Experience para validación de usuarios. Incluye validación Serpro (CPF), farol CX, empresas con apps de socios y usuarios dados de baja por prevención de fraude.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/71b1c78f-31c0-4b67-beb6-4fd919b1ad07"}, {"id": 80.0, "propiedad": "BR", "nombre": "Acompanhamento de Fechamentos", "area": "Externo", "descripcion": "Seguimiento general de cierres comerciales. Muestra el pipeline de ventas cerradas y su evolución temporal.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/169884ff-c672-4f09-b996-b3662b72a917"}, {"id": 81.0, "propiedad": "MX", "nombre": "Gyms Activos - Tokenizados - No tokenizados", "area": "GYMS", "descripcion": "Clasificación de gimnasios según si han recibido tokens (visitas) o no. Identifica academias activas sin uso para acciones de activación.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/ab6766e4-a812-4285-a831-1238a7da2038"}, {"id": 82.0, "propiedad": "BR", "nombre": "Upgrades de Planos", "area": "Externo", "descripcion": "Análisis de upgrades (cambios a planes superiores). Muestra tendencias de migración hacia planes más altos y su impacto en ingresos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/c092bf70-5690-4a28-a0e9-26e3baddc3bc"}, {"id": 83.0, "propiedad": "BR", "nombre": "Dados Empresas - Ativas e Inativas", "area": "Externo", "descripcion": "Datos de empresas clasificadas en activas e inactivas. Permite ver el histórico de empresas que han dejado el servicio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/3ead6983-7692-49a3-a15c-50298b261195"}, {"id": 84.0, "propiedad": "BR", "nombre": "Online Apps", "area": "Externo", "descripcion": "Métricas de aplicaciones online. Muestra el uso de plataformas digitales y servicios en línea disponibles para los usuarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/b3f2fad6-c2b7-4aea-b17b-48c7e517fda7"}, {"id": 85.0, "propiedad": "MX", "nombre": "MX - Gyms - Primer Token Mes", "area": "GYMS", "descripcion": "Identifica el primer token (primera visita) recibido por cada gimnasio en cada mes. Útil para medir la activación de nuevas academias.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/66a456cd-80c8-43a6-a653-00d867907df8"}, {"id": 86.0, "propiedad": "MX", "nombre": "MX - Visitas gyms por usuario", "area": "GYMS", "descripcion": "Detalle de visitas a gimnasios desglosado por usuario individual. Permite analizar la frecuencia y diversidad de uso de cada colaborador.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/b9fefade-6965-4fdf-9e2b-22e0bd7736f0"}, {"id": 87.0, "propiedad": "BR", "nombre": "Ganancias del gimnasio MX", "area": "Externo", "descripcion": "Muestra las ganancias (ingresos por repasse) de cada gimnasio en México. Permite a los gyms y al equipo interno ver la rentabilidad por academia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e2c0fe85-66c3-4509-9cb0-ddf818a7cfe4"}, {"id": 88.0, "propiedad": "BR", "nombre": "User Validation Report", "area": "Externo", "descripcion": "Reporte de validación de usuarios. Muestra el resultado de los procesos de verificación de identidad de los colaboradores.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/f4ab7693-175d-4c81-8a45-a408552f13a2"}, {"id": 89.0, "propiedad": "BR", "nombre": "Copays - Comisiones", "area": "Externo", "descripcion": "Reporte de copays (pagos de usuarios) y comisiones asociadas. Muestra la estructura de cobros y las comisiones generadas por cada transacción.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/19582832-1c9e-4f0d-a96d-247beff303de"}, {"id": 90.0, "propiedad": "BR", "nombre": "Gerencial Gyms MX", "area": "Externo", "descripcion": "Reporte gerencial de gimnasios en México. Vista ejecutiva del desempeño de la red de academias: activos, tokens, expansión y churn de gyms.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/e14670c2-3fc9-4b88-95f2-fa1b4afb4da4"}, {"id": 91.0, "propiedad": "BR", "nombre": "Ativos, Adesões e Cancelamentos Diários", "area": "Externo", "descripcion": "Reporte diario de activos, adhesiones y cancelaciones. Permite seguimiento granular día a día de los movimientos de la base de usuarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/4544fc85-eb77-4191-bfa3-585f32116f57"}, {"id": 92.0, "propiedad": "BR", "nombre": "Perfil de Utilização - Colaboradores", "area": "Externo", "descripcion": "Perfil de utilización de los colaboradores. Muestra patrones de uso: frecuencia, horarios preferidos, modalidades y gimnasios más visitados por usuario.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/df720495-dc08-439e-99c2-76f964342d1f"}, {"id": 93.0, "propiedad": "BR", "nombre": "Gimnasios Totalpass - MX", "area": "Externo", "descripcion": "Catálogo general de gimnasios Totalpass en México. Incluye ubicación, planes disponibles, modalidades y datos de contacto de cada academia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/9b310cc1-6087-4d05-a9e2-032f580ab257"}, {"id": 94.0, "propiedad": "MX", "nombre": "MX - Datos Financieros Gyms", "area": "GYMS", "descripcion": "Información financiera de los gimnasios en México. Incluye repasse, márgenes, volumen de tokens y rentabilidad por academia.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/2ef1847d-7e93-4250-8179-12cb7f2f96bf"}, {"id": 95.0, "propiedad": "BR", "nombre": "Contatos - Academias", "area": "Externo", "descripcion": "Directorio de contactos de las academias/gimnasios. Información de contacto para gestión de la relación con los socios de fitness.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/account/totalpass-production/dashboards/03124581-556c-4a4d-a82f-9c070376c8a2"}, {"id": 96.0, "propiedad": "BR", "nombre": "Dados Empresas", "area": "Externo", "descripcion": "Muestra datos de empresas, grupos, planes y usuarios activos. Permite consultar métricas de adhesión, canales, contactos y configuración comercial de cada empresa.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/8354bccd-d48c-4f5c-957c-c312bf1d20a1"}, {"id": 97.0, "propiedad": "BR", "nombre": "Base de Contatos MX", "area": "Externo", "descripcion": "Base de contactos de empresas y colaboradores en México. Permite consultar datos de comunicación y segmentación de la base de clientes.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/7c1dcb6f-4b23-425d-b334-ca2d271b444a"}, {"id": 98.0, "propiedad": "BR", "nombre": "Base de Contatos", "area": "Externo", "descripcion": "Base general de contactos de empresas y colaboradores. Permite consultar información de comunicación y datos de segmentación.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/5fe8c3da-5fc3-46f1-910c-dcdcbb794a9c"}, {"id": 99.0, "propiedad": "MX", "nombre": "MX - Activaciones new", "area": "CS", "descripcion": "Muestra las nuevas activaciones de usuarios en México. Permite dar seguimiento diario/mensual a las altas y su distribución por empresa y plan.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/f14a73a6-68ab-47ab-b924-4cb283d448fb"}, {"id": 100.0, "propiedad": "BR", "nombre": "Report Customer Success - MX", "area": "Externo", "descripcion": "Reporte del área de Customer Success en México. Permite revisar indicadores clave de gestión de cuentas, retención y satisfacción del cliente.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/7dfcbd50-3337-4452-9115-918a605be797"}, {"id": 101.0, "propiedad": "MX", "nombre": "MX - Activos Adidas", "area": "CS", "descripcion": "Seguimiento de usuarios activos del grupo Adidas en México. Permite monitorear adhesión, activaciones y comportamiento específico de esta cuenta.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/487dd529-261d-40c9-aa58-dbc7537946df"}, {"id": 102.0, "propiedad": "MX", "nombre": "🇲🇽 Acompañamiento de metas", "area": "General", "descripcion": "Seguimiento de metas operativas y comerciales en México. Permite comparar resultados reales vs. objetivos establecidos por periodo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/445c8b3f-23d1-4969-9790-633235902a97"}, {"id": 103.0, "propiedad": "MX", "nombre": "Dashboard General Dario", "area": "Finanzas", "descripcion": "Análisis financiero de repasse, copay, upgrades y márgenes por plan. Permite evaluar la rentabilidad y el comportamiento de cobro del programa.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/4135e4fc-80da-4db3-900f-ed678824fa63"}, {"id": 104.0, "propiedad": "MX", "nombre": "MX - Objetivos Mensuales", "area": "General", "descripcion": "Seguimiento de objetivos mensuales del equipo en México. Permite comparar avance real vs. metas de activaciones, retención y otros KPIs.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/514cee59-3257-432b-9d3b-cccc4cc482e3"}, {"id": 105.0, "propiedad": "BR", "nombre": "Grupos de Serviço Apps Parceiros", "area": "Externo", "descripcion": "Muestra los grupos de servicio de apps asociadas (partners). Permite identificar qué servicios complementarios están disponibles y su uso.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/b93da973-9bd3-46a4-b2c8-c9e87d398377"}, {"id": 106.0, "propiedad": "MX", "nombre": "MX - Tamaño de empresas", "area": "General", "descripcion": "Clasificación de empresas en México por tamaño. Permite analizar la distribución de la base de clientes según número de elegibles o activos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/b272ceb8-94a2-4339-a8af-b5a577c559b9"}, {"id": 107.0, "propiedad": "BR", "nombre": "Nuevos Activos y Cancelaciones - MX", "area": "Externo", "descripcion": "Muestra nuevos usuarios activos y cancelaciones en México. Permite comparar altas vs. bajas y analizar el crecimiento neto por periodo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/53faa663-eba9-4cc8-9051-8254caf3891e"}, {"id": 108.0, "propiedad": "BR", "nombre": "Acompanhamento de Faturamento - MX", "area": "Externo", "descripcion": "Seguimiento de facturación en México. Permite monitorear ingresos por fee, copay y otros conceptos de cobro a empresas.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/63ab0d5b-f40b-45c6-8817-6d5a372217f7"}, {"id": 109.0, "propiedad": "MX", "nombre": "Casos Atípicos 🧐", "area": "General", "descripcion": "Identificación de casos atípicos o anomalías en la operación. Permite detectar comportamientos inusuales en uso, cobro o activaciones que requieren revisión.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/5d2f954f-99a4-4c30-94a2-42161d2d99ea"}, {"id": 110.0, "propiedad": "MX", "nombre": "Repasse Owners", "area": "GYMS", "descripcion": "Detalle de repasse asignado por responsable (owner). Permite analizar el costo de visitas distribuido por ejecutivo o área responsable.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/4bdd4b67-434d-44aa-b697-6a1607e88602"}, {"id": 111.0, "propiedad": "MX", "nombre": "MX - Cupones", "area": "Marketing", "descripcion": "Gestión y seguimiento de cupones en México. Permite analizar el uso, redención y impacto de cupones promocionales en la base de usuarios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/5f568910-5d2a-4a06-93de-7cafb0bea594"}, {"id": 112.0, "propiedad": "MX", "nombre": "MX - Reporte General - Prueba", "area": "General", "descripcion": "Versión de prueba del reporte general de México. Permite validar nuevas métricas o visualizaciones antes de su publicación oficial.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/4f9e5041-84b0-48d6-93b2-08c27c4c8c99"}, {"id": 113.0, "propiedad": "MX", "nombre": "MX - User Validation - Users analysis", "area": "Ops", "descripcion": "Análisis de validación de usuarios en México. Permite revisar el proceso de verificación de identidad y estado de validación de la base.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/8e2d7eb5-9d5d-4070-8a9a-f3c755df9011"}, {"id": 114.0, "propiedad": "BR", "nombre": "Perfil TotalPass MX", "area": "Externo", "descripcion": "Perfil demográfico y de comportamiento de usuarios TotalPass en México. Permite segmentar la base por edad, género, ubicación y hábitos de uso.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/a3c4dc5a-5ab3-4172-9b52-d14f0c35e09a"}, {"id": 115.0, "propiedad": "BR", "nombre": "Análise Santander MX", "area": "Externo", "descripcion": "Análisis específico de la cuenta Santander en México. Permite monitorear adhesión, activaciones y métricas de desempeño de esta empresa.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/61db619d-c4e4-4065-b8a4-f18d8e3442f8"}, {"id": 116.0, "propiedad": "BR", "nombre": "Promotions - MX", "area": "Externo", "descripcion": "Gestión de promociones en México. Permite dar seguimiento al uso, impacto y costo de las promociones activas por empresa y plan.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/6f2fcfa0-2705-4de9-a4c9-b50ffc2275fe"}, {"id": 117.0, "propiedad": "MX", "nombre": "MX - Segmentos Tokens GYM", "area": "GYMS", "descripcion": "Segmentación de tokens por tipo de gimnasio. Permite analizar la distribución de visitas según categoría, modalidad o grupo de gimnasio.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/b099c0b7-6b0f-4598-8c9f-f74f4881b6e2"}, {"id": 118.0, "propiedad": "MX", "nombre": "Public Databank MX", "area": "GYMS", "descripcion": "Banco de datos público de México. Permite consultar información consolidada y disponible para análisis abiertos del mercado.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/169027e6-6d3e-4818-9d4b-3e1fe46fd71a"}, {"id": 119.0, "propiedad": "BR", "nombre": "Análise Planos - Vitor Mizukawa", "area": "Externo", "descripcion": "Análisis de planes elaborado por Vitor Mizukawa. Permite revisar la composición, pricing y comportamiento de los diferentes planes.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/7c3fbd51-93c4-485f-a0f8-72e22ce48cbb"}, {"id": 120.0, "propiedad": "MX", "nombre": "Personalizado Seb", "area": "GYMS", "descripcion": "Tablero personalizado para Seb. Permite visualizar métricas específicas configuradas según las necesidades de este usuario o equipo.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/17c5ed92-7932-4de6-ad45-06764682c75a"}, {"id": 121.0, "propiedad": "BR", "nombre": "Dashboard sobre as reservas", "area": "Externo", "descripcion": "Información sobre reservas en gimnasios. Permite analizar volumen, tendencias y comportamiento de las reservas de clases o espacios.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/21c17b19-b38d-416a-9d76-ca19543e07cc"}, {"id": 122.0, "propiedad": "MX", "nombre": "MX - Resultados Campaña Regala Bienestar, Regala Totalpass", "area": "Marketing", "descripcion": "Resultados de la campaña 'Regala Bienestar, Regala Totalpass'. Permite medir registros, conversiones y ROI de esta iniciativa de marketing.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/f63cfac4-3bdb-450b-ab42-bd24c18485a5"}, {"id": 123.0, "propiedad": "MX", "nombre": "Uso Totalpassers", "area": "CS", "descripcion": "Análisis de uso de los Totalpassers. Permite evaluar frecuencia, intensidad y patrones de actividad de los usuarios activos.", "url": "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/a6b65b50-1b0b-4c67-ad64-de7e69df62ef"}];
/* ---------- Icon library (simple stroke icons, brand-neutral) ---------- */
const ICONS = {
  activaciones: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 17L9 11L13 15L21 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 6H21V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cancelaciones: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 7L9 13L13 9L21 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 18H21V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  gimnasios: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 9V15M2 10.5V13.5M7 12H17M20 9V15M22 10.5V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  finanzas: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2V22M17 6H9.5C8 6 7 7 7 8.5C7 10 8 11 9.5 11H14.5C16 11 17 12 17 13.5C17 15 16 16 14.5 16H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  cs: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 13V11C4 6.6 7.6 3 12 3C16.4 3 20 6.6 20 11V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 13.5C3 12.7 3.7 12 4.5 12H6V18H4.5C3.7 18 3 17.3 3 16.5V13.5Z" stroke="currentColor" stroke-width="2"/><path d="M21 13.5C21 12.7 20.3 12 19.5 12H18V18H19.5C20.3 18 21 17.3 21 16.5V13.5Z" stroke="currentColor" stroke-width="2"/><path d="M18 18.5C18 20 15.5 21 12 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  marketing: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 10V14H7L13 18V6L7 10H3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M17 9C18 10 18 14 17 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 7C22 9.5 22 14.5 20 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  ventas: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 8H20V19C20 19.5 19.5 20 19 20H5C4.5 20 4 19.5 4 19V8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M8 8V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V8" stroke="currentColor" stroke-width="2"/><path d="M4 12H20" stroke="currentColor" stroke-width="2"/></svg>',
  metas: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="0.5" stroke="currentColor" stroke-width="2.5"/></svg>',
  uso: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7V12L15.5 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  empresas: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="9" width="7" height="12" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="7" height="18" stroke="currentColor" stroke-width="2"/><path d="M16 7H17M16 11H17M16 15H17M7 13H8M7 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  legal: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3V21M7 21H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 6L5 9L7.5 15.5C9 16.5 11 16.5 12.5 15.5L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6L19 9L16.5 15.5C15 16.5 13 16.5 11.5 15.5L19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  adhesion: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 21C9 21 3 15.5 3 10.5C3 7.5 5.2 5.5 7.8 5.5C9.2 5.5 10.4 6.2 11 7.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M9 21C9 21 15 15.5 15 10.5C15 7.5 12.8 5.5 10.2 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="19" cy="8" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  mapa: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 4L4 6V20L9 18L15 20L20 18V4L15 6L9 4Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 4V18M15 6V20" stroke="currentColor" stroke-width="2"/></svg>',
  usuarios: '<svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke="currentColor" stroke-width="2"/><path d="M2.5 20C2.5 16 5.5 13.5 9 13.5C12.5 13.5 15.5 16 15.5 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M15 13.7C17.5 14.1 19.5 16.3 19.5 19.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M13.5 8.3C14.8 8.1 15.8 7 15.8 5.7C15.8 4.4 14.8 3.3 13.5 3.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  default: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="2"/></svg>'
};

/* ---------- Category detection rules (ordered by priority) ---------- */
const CATEGORY_RULES = [
  { key:'gimnasios',     label:'Gimnasios',              icon:'gimnasios',   kw:['gym','gimnasio','academia'] },
  { key:'finanzas',      label:'Finanzas',                icon:'finanzas',    kw:['financ','margen','copay','repasse','cobran','factura','comisi','conciliaç','conciliac'] },
  { key:'cancelaciones', label:'Churn / Cancelaciones',   icon:'cancelaciones', kw:['cancelac','churn','cancelamento','baja'] },
  { key:'activaciones',  label:'Activaciones',            icon:'activaciones', kw:['activ'] },
  { key:'metas',         label:'Metas y Objetivos',       icon:'metas',       kw:['meta','objetivo'] },
  { key:'cs',            label:'Customer Success',        icon:'cs',          kw:['customer success','resultados cs','cx -','carentes','healthscore','health score'] },
  { key:'marketing',     label:'Marketing',                icon:'marketing',   kw:['marketing','campaña','campanha','promoç','promoc','cupon','convites'] },
  { key:'ventas',        label:'Ventas / Comercial',       icon:'ventas',      kw:['salesforce','leads','fechamento','propuesta','renovac','pipeline','implanta'] },
  { key:'tokens',        label:'Tokens y Uso',            icon:'uso',         kw:['token','visita','no show','bookings','reserva'] },
  { key:'adhesion',      label:'Adhesión',                 icon:'adhesion',    kw:['adhes','elegib'] },
  { key:'empresas',      label:'Empresas',                 icon:'empresas',    kw:['empresa','company','cartera','carteira'] },
  { key:'usuarios',      label:'Usuarios',                 icon:'usuarios',    kw:['usuario','user','colaborador','titular','dependiente','dependente'] },
  { key:'mapa',          label:'Geografía',                icon:'mapa',        kw:['mapa','geograf','cerca'] },
  { key:'legal',         label:'Legal',                    icon:'legal',       kw:['legal'] },
];

function detectCategories(text){
  const found = [];
  for(const rule of CATEGORY_RULES){
    if(rule.kw.some(k => text.includes(k))){
      found.push(rule.key);
    }
  }
  return found.length ? found : ['default'];
}

/* ---------- Live data source: Google Sheets ----------
   El Google Sheet debe estar compartido como "Cualquier persona con
   el enlace" (Lector). Si el nombre de la pestaña cambia, actualiza
   SHEET_NAME para que coincida exactamente. */
const SHEET_ID = '1GX2PDKfRuejcueJLdSG_sV50Deq9RDbLsvhJjXKaOTQ';
const SHEET_NAME = 'Glosario Dashboards V2';
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/${encodeURIComponent(SHEET_NAME)}`;

function mapSheetRow(r){
  return {
    id: r['#'],
    propiedad: (r['Propiedad'] || '').trim(),
    nombre: (r['Nombre del Reporte'] || '').trim(),
    area: (r['Área'] || '').trim(),
    descripcion: (r['Descripción para Usuarios'] || '').trim(),
    url: (r['URL'] || '').trim(),
    mostrar: r['Mostrar']
  };
}

/* Acepta TRUE, Sí, X, 1, checkbox marcado, etc. como "mostrar" */
function isMostrar(v){
  if(v === true) return true;
  const s = String(v ?? '').trim().toLowerCase();
  return ['true', 'verdadero', 'sí', 'si', 'x', '1', 'yes'].includes(s);
}

async function loadDashboards(){
  try{
    const res = await fetch(SHEET_URL);
    if(!res.ok) throw new Error('HTTP ' + res.status);
    const raw = await res.json();
    const mapped = raw.map(mapSheetRow)
      .filter(d => d.nombre)
      .filter(d => isMostrar(d.mostrar));
    if(!mapped.length) throw new Error('La hoja no devolvió filas marcadas para mostrar');
    return { data: mapped, source: 'live' };
  } catch(err){
    console.warn('No se pudo cargar Google Sheets, usando datos de respaldo:', err);
    return { data: FALLBACK_DASHBOARDS, source: 'fallback' };
  }
}

/* ---------- Enrich data (mutable, populated after load) ---------- */
const CAT_MAP = Object.fromEntries(CATEGORY_RULES.map(r => [r.key, r]));

const AREA_ICONS = {
  'CS':'cs', 'B2B':'ventas', 'Finanzas':'finanzas', 'GYMS':'gimnasios',
  'Marketing':'marketing', 'Legal':'legal', 'Ops':'uso', 'General':'default',
  'Externo':'mapa', 'People and Culture':'usuarios'
};

let DASHBOARDS = [];
let owners = [];
let areas = [];
let categoriesPresent = [];

function deriveFromDashboards(data){
  DASHBOARDS = data;
  DASHBOARDS.forEach(d => {
    const text = (d.nombre + ' ' + d.descripcion).toLowerCase();
    d.categories = detectCategories(text);
    d.primaryIcon = AREA_ICONS[d.area] || (CAT_MAP[d.categories[0]] ? CAT_MAP[d.categories[0]].icon : 'default');
  });

  owners = [...new Set(DASHBOARDS.map(d => d.propiedad))].sort();
  categoriesPresent = [...new Set(DASHBOARDS.flatMap(d => d.categories))]
    .filter(k => k !== 'default')
    .sort((a,b) => CAT_MAP[a].label.localeCompare(CAT_MAP[b].label));
  areas = [...new Set(DASHBOARDS.map(d => d.area).filter(Boolean))].sort();
}

/* ---------- Owner metadata (flags + labels) ---------- */
function ownerMeta(o){
  if(o === 'MX') return { flag:'🇲🇽', label:'México (MX)', short:'MX' };
  if(o === 'BR') return { flag:'🇧🇷', label:'Brasil (BR)', short:'BR' };
  return { flag:'', label:o, short:o };
}

const state = { owners:new Set(), areas:new Set(), categories:new Set(), query:'' };

/* ---------- Render filters ---------- */
function checkSvg(){
  return '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12L9 17L20 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function renderOwnerFilters(){
  const wrap = document.getElementById('ownerFilters');
  wrap.innerHTML = owners.map(o => {
    const count = DASHBOARDS.filter(d => d.propiedad === o).length;
    const meta = ownerMeta(o);
    return `<label class="filter-row" data-owner="${o}">
      <input type="checkbox">
      <span class="chk">${checkSvg()}</span>
      <span class="flag">${meta.flag}</span>
      <span class="flabel">${meta.label}</span>
      <span class="fcount">${count}</span>
    </label>`;
  }).join('');

  wrap.querySelectorAll('.filter-row').forEach(row => {
    row.addEventListener('click', e => {
      e.preventDefault();
      const owner = row.dataset.owner;
      if(state.owners.has(owner)) state.owners.delete(owner);
      else state.owners.add(owner);
      row.classList.toggle('active');
      render();
    });
  });
}

function renderAreaFilters(){
  const wrap = document.getElementById('areaFilters');
  wrap.innerHTML = areas.map(a => {
    const count = DASHBOARDS.filter(d => d.area === a).length;
    return `<label class="filter-row" data-area="${escapeAttr(a)}">
      <input type="checkbox">
      <span class="chk">${checkSvg()}</span>
      <span class="flabel">${escapeHTML(a)}</span>
      <span class="fcount">${count}</span>
    </label>`;
  }).join('');

  wrap.querySelectorAll('.filter-row').forEach(row => {
    row.addEventListener('click', e => {
      e.preventDefault();
      const area = row.dataset.area;
      if(state.areas.has(area)) state.areas.delete(area);
      else state.areas.add(area);
      row.classList.toggle('active');
      render();
    });
  });
}

function renderCategoryFilters(){
  const wrap = document.getElementById('categoryFilters');
  wrap.innerHTML = categoriesPresent.map(key => {
    const rule = CAT_MAP[key];
    const count = DASHBOARDS.filter(d => d.categories.includes(key)).length;
    return `<label class="filter-row" data-cat="${key}">
      <input type="checkbox">
      <span class="chk">${checkSvg()}</span>
      <span class="flabel">${rule.label}</span>
      <span class="fcount">${count}</span>
    </label>`;
  }).join('');

  wrap.querySelectorAll('.filter-row').forEach(row => {
    row.addEventListener('click', e => {
      e.preventDefault();
      const cat = row.dataset.cat;
      if(state.categories.has(cat)) state.categories.delete(cat);
      else state.categories.add(cat);
      row.classList.toggle('active');
      render();
    });
  });
}

/* ---------- Active chips ---------- */
function renderChips(){
  const wrap = document.getElementById('activeChips');
  const chips = [];
  state.owners.forEach(o => { const m = ownerMeta(o); chips.push({type:'owner', value:o, label: `${m.flag} ${m.label}`}); });
  state.areas.forEach(a => chips.push({type:'area', value:a, label:a}));
  state.categories.forEach(c => chips.push({type:'category', value:c, label:CAT_MAP[c].label}));

  wrap.innerHTML = chips.map(c =>
    `<span class="chip" data-type="${c.type}" data-value="${c.value}">${c.label}<button aria-label="Quitar filtro">&times;</button></span>`
  ).join('');

  wrap.querySelectorAll('.chip button').forEach(btn => {
    btn.addEventListener('click', () => {
      const chip = btn.parentElement;
      const {type, value} = chip.dataset;
      if(type === 'owner') state.owners.delete(value);
      else if(type === 'area') state.areas.delete(value);
      else state.categories.delete(value);
      syncFilterUI();
      render();
    });
  });
}

function syncFilterUI(){
  document.querySelectorAll('#ownerFilters .filter-row').forEach(row => {
    row.classList.toggle('active', state.owners.has(row.dataset.owner));
  });
  document.querySelectorAll('#areaFilters .filter-row').forEach(row => {
    row.classList.toggle('active', state.areas.has(row.dataset.area));
  });
  document.querySelectorAll('#categoryFilters .filter-row').forEach(row => {
    row.classList.toggle('active', state.categories.has(row.dataset.cat));
  });
}

/* ---------- Filtering logic ---------- */
function getFiltered(){
  const q = state.query.trim().toLowerCase();
  return DASHBOARDS.filter(d => {
    if(state.owners.size && !state.owners.has(d.propiedad)) return false;
    if(state.areas.size && !state.areas.has(d.area)) return false;
    if(state.categories.size && !d.categories.some(c => state.categories.has(c))) return false;
    if(q){
      const hay = (d.nombre + ' ' + d.descripcion).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}

/* ---------- Card render ---------- */
function cardHTML(d, i){
  const areaTag = d.area ? `<span class="tag tag-area">${escapeHTML(d.area)}</span>` : '';
  const catTags = d.categories.filter(c => c !== 'default').slice(0,2).map(c => `<span class="tag">${CAT_MAP[c].label}</span>`).join('');
  const tags = areaTag + catTags;
  const ownerClass = d.propiedad.toLowerCase();
  const delay = Math.min(i,16) * 0.03;
  return `
  <article class="card" style="animation-delay:${delay}s">
    <div class="card-top">
      <div class="icon-badge">${ICONS[d.primaryIcon] || ICONS.default}</div>
      <span class="owner-badge ${ownerClass}">${ownerMeta(d.propiedad).flag} ${d.propiedad}</span>
    </div>
    <h2 class="card-name">${escapeHTML(d.nombre)}</h2>
    <p class="card-desc">${escapeHTML(d.descripcion)}</p>
    <div class="tag-row">${tags}</div>
    <div class="card-footer">
      <a class="open-btn" href="${escapeAttr(d.url)}" target="_blank" rel="noopener noreferrer">
        Abrir Dashboard
        <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
  </article>`;
}

function escapeHTML(str){
  return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function escapeAttr(str){ return escapeHTML(str); }

/* ---------- Main render ---------- */
function render(){
  const filtered = getFiltered();
  const grid = document.getElementById('grid');
  const empty = document.getElementById('emptyState');

  document.getElementById('resultCount').textContent = filtered.length;

  if(filtered.length === 0){
    grid.innerHTML = '';
    empty.hidden = false;
  } else {
    empty.hidden = true;
    grid.innerHTML = filtered.map(cardHTML).join('');
  }

  renderChips();
  updateFilterBadges();

  const hasFilters = state.owners.size || state.areas.size || state.categories.size || state.query.trim();
  document.getElementById('clearFilters').disabled = !hasFilters;
}

/* ---------- Collapsible filter sections ---------- */
document.querySelectorAll('.filter-head--toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.filter-block--collapsible');
    const isOpen = block.dataset.open === 'true';
    block.dataset.open = isOpen ? 'false' : 'true';
  });
});

function updateFilterBadges(){
  const areaBadge = document.getElementById('areaBadge');
  const categoryBadge = document.getElementById('categoryBadge');
  if(state.areas.size){ areaBadge.textContent = state.areas.size; areaBadge.hidden = false; }
  else { areaBadge.hidden = true; }
  if(state.categories.size){ categoryBadge.textContent = state.categories.size; categoryBadge.hidden = false; }
  else { categoryBadge.hidden = true; }
}

/* ---------- Search ---------- */
const searchInput = document.getElementById('searchInput');
const searchWrap = document.querySelector('.search-wrap');
searchInput.addEventListener('input', () => {
  state.query = searchInput.value;
  searchWrap.classList.toggle('has-value', !!searchInput.value);
  render();
});
document.getElementById('clearSearch').addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  searchWrap.classList.remove('has-value');
  render();
});

/* ---------- Clear filters ---------- */
function clearAll(){
  state.owners.clear();
  state.areas.clear();
  state.categories.clear();
  state.query = '';
  searchInput.value = '';
  searchWrap.classList.remove('has-value');
  syncFilterUI();
  render();
}
document.getElementById('clearFilters').addEventListener('click', clearAll);
document.getElementById('emptyReset').addEventListener('click', clearAll);

/* ---------- Mobile sidebar ---------- */
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('sidebarScrim');
document.getElementById('menuToggle').addEventListener('click', () => {
  sidebar.classList.add('open');
  scrim.classList.add('show');
});
scrim.addEventListener('click', () => {
  sidebar.classList.remove('open');
  scrim.classList.remove('show');
});

/* ---------- Description tooltip on hover (only when text is truncated) ---------- */
const descTooltip = document.getElementById('descTooltip');
const grid = document.getElementById('grid');
let tooltipTarget = null;

function positionTooltip(el){
  const rect = el.getBoundingClientRect();
  const margin = 10;
  descTooltip.style.maxWidth = Math.min(340, window.innerWidth - 32) + 'px';
  descTooltip.style.left = '0px';
  descTooltip.style.top = '0px';
  descTooltip.classList.add('show');
  const tw = descTooltip.offsetWidth;
  const th = descTooltip.offsetHeight;

  let left = rect.left + rect.width / 2 - tw / 2;
  left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));

  const spaceAbove = rect.top;
  const spaceBelow = window.innerHeight - rect.bottom;
  let top, arrowClass;
  if(spaceAbove > th + margin + 8 || spaceAbove > spaceBelow){
    top = rect.top - th - 12;
    arrowClass = 'arrow-bottom';
  } else {
    top = rect.bottom + 12;
    arrowClass = 'arrow-top';
  }
  top = Math.max(margin, top);

  const arrowX = Math.max(16, Math.min(rect.left + rect.width/2 - left - 5, tw - 26));

  descTooltip.style.left = left + 'px';
  descTooltip.style.top = top + 'px';
  descTooltip.style.setProperty('--arrow-x', arrowX + 'px');
  descTooltip.classList.remove('arrow-top', 'arrow-bottom');
  descTooltip.classList.add(arrowClass);
}

grid.addEventListener('mouseover', e => {
  const el = e.target.closest('.card-desc');
  if(!el || el === tooltipTarget) return;
  if(el.scrollHeight <= el.clientHeight + 1) return; // not truncated, no need
  tooltipTarget = el;
  descTooltip.textContent = el.dataset.full || el.textContent;
  positionTooltip(el);
});

grid.addEventListener('mouseout', e => {
  const el = e.target.closest('.card-desc');
  if(!el || el !== tooltipTarget) return;
  if(e.relatedTarget && el.contains(e.relatedTarget)) return;
  tooltipTarget = null;
  descTooltip.classList.remove('show');
});

window.addEventListener('scroll', () => {
  if(tooltipTarget) positionTooltip(tooltipTarget);
}, { passive:true, capture:true });

/* ---------- Theme toggle (dark default, light optional) ---------- */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme){
  if(theme === 'light'){
    root.setAttribute('data-theme', 'light');
    themeToggle.setAttribute('aria-label', 'Cambiar a modo oscuro');
  } else {
    root.removeAttribute('data-theme');
    themeToggle.setAttribute('aria-label', 'Cambiar a modo claro');
  }
}

let currentTheme = 'dark';
applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(currentTheme);
});

/* ---------- Privacy modal ---------- */
const privacyBtn = document.getElementById('privacyBtn');
const privacyOverlay = document.getElementById('privacyOverlay');
const privacyClose = document.getElementById('privacyClose');

function openPrivacy(){
  privacyOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closePrivacy(){
  privacyOverlay.hidden = true;
  document.body.style.overflow = '';
}
privacyBtn.addEventListener('click', openPrivacy);
privacyClose.addEventListener('click', closePrivacy);
privacyOverlay.addEventListener('click', e => {
  if(e.target === privacyOverlay) closePrivacy();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && !privacyOverlay.hidden) closePrivacy();
  if(e.key === 'Escape' && !accessOverlay.hidden) closeAccess();
});

const accessBtn = document.getElementById('accessBtn');
const accessOverlay = document.getElementById('accessOverlay');
const accessClose = document.getElementById('accessClose');

function openAccess(){
  accessOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeAccess(){
  accessOverlay.hidden = true;
  document.body.style.overflow = '';
}
accessBtn.addEventListener('click', openAccess);
accessClose.addEventListener('click', closeAccess);
accessOverlay.addEventListener('click', e => {
  if(e.target === accessOverlay) closeAccess();
});

/* ---------- Init ---------- */
function formatTimestamp(d){
  return d.toLocaleString('es-MX', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

async function initApp(){
  document.getElementById('grid').innerHTML =
    '<div class="loading-msg"><div class="loading-spinner"></div>Cargando tableros desde Google Sheets…</div>';

  const { data, source } = await loadDashboards();
  deriveFromDashboards(data);

  renderOwnerFilters();
  renderAreaFilters();
  renderCategoryFilters();
  render();

  const notice = document.getElementById('dataNotice');
  const statusOk = document.getElementById('dataStatusOk');

  if(source === 'fallback'){
    notice.hidden = false;
    statusOk.hidden = true;
  } else {
    notice.hidden = true;
    statusOk.hidden = false;
    document.getElementById('dataStatusOkText').textContent =
      `Actualizado: ${formatTimestamp(new Date())}`;
  }
}

initApp();

