
document.addEventListener('DOMContentLoaded', function () {
    const wasteForm = document.getElementById('wasteForm');
    const suggestionsSection = document.getElementById('suggestionsSection');
    const suggestionsList = document.getElementById('suggestionsList');
    const suggestionOutput = document.getElementById('suggestionOutput');

    wasteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const wasteType = document.getElementById('wasteType').value;
        const quantity = document.getElementById('quantity').value;
        const location = document.getElementById('location').value;

        setTimeout(function () {
            getSuggestion(wasteType);
            showSuggestions(wasteType, quantity, location);
        }, 1000);
    });

    function getSuggestion(wasteType) {
        const wasteTypeInput = wasteType.trim().toLowerCase();
        let suggestion = '';

        switch (wasteTypeInput) {
            case 'plastic':
                suggestion = 'Plastic can often be recycled. Reduce single-use plastics by using reusable bags, bottles, and containers. Rinse plastic items and check local recycling guidelines.';
                break;
            // Add other cases here...
            case 'food':
                suggestion = 'Food waste can be composted. Start a compost bin for organic waste or use a community composting program. Plan meals to reduce food waste and get creative with leftovers.';
                break;
            case 'electronics':
                suggestion = 'Electronics contain hazardous materials and should not be thrown in the trash. Take them to an e-waste recycling center. Consider donating working electronics.';
                break;
            case 'glass':
                suggestion = 'Glass bottles and jars can be recycled. Rinse them and remove lids or caps. Some areas accept broken glass; check your local recycling rules.';
                break;
            case 'paper':
                suggestion = 'Recycle paper products like newspapers, cardboard, and office paper. Avoid contaminating paper with food or grease. Go digital to reduce paper use.';
                break;
            case 'metal':
                suggestion = 'Metal cans and containers are recyclable. Rinse them before recycling. Scrap metal should also be recycled, and many recycling centers pay for certain metals.';
                break;
            case 'textiles':
                suggestion = 'Donate gently used clothing and textiles. Recycle unusable fabrics through textile recycling programs. Repurpose old textiles into rags or DIY projects.';
                break;
            case 'batteries':
                suggestion = 'Batteries contain toxic materials and should be recycled. Many retailers and recycling centers accept used batteries. Never throw batteries in the trash.';
                break;
            case 'light bulbs':
                suggestion = 'Fluorescent bulbs and other special light bulbs contain hazardous materials and should be recycled. Many stores and recycling centers accept them.';
                break;
            case 'hazardous waste':
                suggestion = 'Hazardous waste includes chemicals, paints, pesticides, and more. These should be taken to a hazardous waste disposal facility. Do not dispose of them in regular trash or down the drain.';
                break;
            case 'medications':
                suggestion = 'Unused or expired medications should not be flushed or thrown in the trash. Many pharmacies and community programs offer medication take-back services.';
                break;
            case 'garden waste':
                suggestion = 'Compost garden waste like leaves, grass clippings, and small branches. Alternatively, use a yard waste collection service if available in your area.';
                break;
            case 'furniture':
                suggestion = 'Consider donating or selling usable furniture. For disposal, check with local waste management for bulk pickup or recycling options. Some materials may be recyclable.';
                break;
            case 'construction waste':
                suggestion = 'Construction and demolition waste should be sorted for recycling. Many materials like wood, metal, and concrete can be recycled. Check local disposal guidelines.';
                break;
            case 'tires':
                suggestion = 'Old tires should not be disposed of in landfills as they are difficult to compact and pose environmental hazards. They can often be recycled at special facilities.';
                break;
            case 'paint':
                suggestion = 'Paint should be disposed of properly. Latex paint can sometimes be dried and disposed of in regular trash, while oil-based paint should be taken to a hazardous waste facility.';
                break;
            case 'oil':
                suggestion = 'Used motor oil and cooking oil should be recycled at appropriate facilities. Never pour oil down the drain or dispose of it in regular trash as it can contaminate water sources.';
                break;
            case 'styrofoam':
                suggestion = 'Styrofoam is not accepted by most curbside recycling programs. Check for local drop-off locations that accept styrofoam, or reduce use by opting for alternatives.';
                break;
            case 'cosmetics':
                suggestion = 'Expired or unused cosmetics should not be flushed or thrown away. Check with local disposal guidelines or take advantage of take-back programs offered by some brands.';
                break;
            case 'pet waste':
                suggestion = 'Pet waste should be disposed of in a biodegradable bag and placed in the trash. Do not compost or flush it down the toilet as it can contain harmful pathogens.';
                break;
            case 'cleaning products':
                suggestion = 'Cleaning products, especially those with hazardous chemicals, should be disposed of according to local hazardous waste guidelines. Consider using eco-friendly alternatives.';
                break;
            case 'ink cartridges':
                suggestion = 'Ink and toner cartridges can often be recycled through manufacturer take-back programs or at designated recycling locations. This helps conserve resources and prevent pollution.';
                break;
            case 'wood':
                suggestion = 'Wood from furniture, pallets, or construction should be reused or recycled when possible. Treated wood may have to be disposed of separately due to chemical treatments.';
                break;
            case 'yard equipment':
                suggestion = 'Old or broken yard equipment should be donated if still functional or recycled. Many items contain recyclable metals and plastics. Check local recycling options.';
                break;
                case 'ceramics':
                    suggestion = 'Ceramic items are not usually recyclable in curbside programs. Consider repurposing or donating them if they are still in good condition.';
                    break;
                case 'leather':
                    suggestion = 'Leather goods can often be donated or repurposed. If disposal is necessary, check for specialized recycling programs as leather is not commonly recyclable curbside.';
                    break;
                case 'plastic bags':
                    suggestion = 'Plastic bags often cannot be recycled curbside. Many grocery stores and retailers have drop-off bins for plastic bags and other flexible plastics.';
                    break;
                case 'clothing hangers':
                    suggestion = 'Plastic and metal hangers are often not recyclable curbside. Consider donating them or check with local dry cleaners or recycling programs that accept hangers.';
                    break;
                case 'toothbrushes':
                    suggestion = 'Toothbrushes are typically made of mixed materials that are not easily recyclable. Consider using biodegradable toothbrushes or programs that recycle oral care products.';
                    break;
                case 'shoes':
                    suggestion = 'Old shoes can be donated if they are in good condition. Some brands and retailers offer recycling programs for worn-out shoes.';
                    break;
                case 'cookware':
                    suggestion = 'Non-stick pans and other cookware may contain materials that are difficult to recycle. Consider donating or checking for recycling options specific to cookware materials.';
                    break;
                case 'rubber items':
                    suggestion = 'Rubber products, such as gloves or rubber bands, are not typically recyclable. Check for specialized recycling programs or consider reuse before disposal.';
                    break;
                case 'corks':
                    suggestion = 'Natural corks can sometimes be composted or recycled through specialized programs. Synthetic corks are usually not recyclable and should be disposed of in the trash.';
                    break;
                case 'cds and dvds':
                    suggestion = 'CDs and DVDs can often be recycled, though not curbside. Many recycling centers or e-waste programs accept them. Consider donating usable discs.';
                    break;
                case 'photographs':
                    suggestion = 'Traditional photographs are often coated with chemicals that make them non-recyclable. Consider digitizing photos to preserve memories and reduce physical waste.';
                    break;
                case 'mirrors':
                    suggestion = 'Mirrors are not recyclable in curbside programs due to their coating. If intact, consider donating; otherwise, dispose of them carefully in the trash.';
                    break;
                case 'carpet':
                    suggestion = 'Carpet and rugs are not typically accepted in curbside recycling. Check for specialized recycling programs or disposal guidelines for large items.';
                    break;
                case 'bicycles':
                    suggestion = 'Old bicycles can often be donated or recycled. Many organizations refurbish bikes for charity, or they can be dismantled for recyclable parts.';
                    break;
                    case 'clothing':
                        suggestion = 'Donate gently used clothing to charity or consignment shops. Textiles in poor condition can be recycled or used as rags. Avoid throwing clothes in the trash.';
                        break;
                    case 'books':
                        suggestion = 'Donate or sell used books to libraries, schools, or thrift stores. If recycling, check if your local center accepts books, or remove covers if required.';
                        break;
                    case 'shoes':
                        suggestion = 'Donate wearable shoes to charities or recycling programs. Some retailers offer take-back programs for old shoes, which are often recycled or repurposed.';
                        break;
                    case 'mattresses':
                        suggestion = 'Recycle old mattresses through specialized recycling programs. Some organizations accept mattress donations if they are in good condition.';
                        break;
                    case 'carpet':
                        suggestion = 'Carpet can often be recycled, especially if it is free of adhesives and other contaminants. Check local recycling programs or return policies from retailers.';
                        break;
                    case 'pharmaceuticals':
                        suggestion = 'Dispose of unused or expired pharmaceuticals at designated drop-off locations or during take-back events. Do not flush them down the toilet or throw them in the trash.';
                        break;
                    case 'plastic bags':
                        suggestion = 'Recycle plastic bags at designated drop-off points, often found at grocery stores. Avoid using single-use bags by switching to reusable ones.';
                        break;
                    case 'office supplies':
                        suggestion = 'Recycle or donate excess office supplies such as paper, pens, and folders. Many schools and nonprofits appreciate donations of usable items.';
                        break;
                    case 'medical waste':
                        suggestion = 'Medical waste, including sharps and biohazards, should be disposed of in designated containers and taken to authorized disposal facilities. Never throw medical waste in regular trash.';
                        break;
                    case 'construction equipment':
                        suggestion = 'Donate or sell old construction equipment. For disposal, check with local authorities on recycling or disposal options, as these items often contain recyclable metals and parts.';
                        break;
                    default:
                        suggestion = 'Please enter a valid waste type.';
                }
        suggestionOutput.innerText = suggestion;
    }
    

    function showSuggestions(wasteType, quantity, location) {
        const suggestions = [
            `Consider refusing ${quantity} units of ${wasteType} to reduce waste.`,
            `You can reduce the consumption of ${wasteType} by ${Math.round(quantity / 2)} units.`,
            `Reuse ${wasteType} containers for storage purposes.`,
            `Recycle ${quantity} units of ${wasteType} at your local recycling center.`,
            `Compost ${quantity} units of ${wasteType} if organic.`,
        ];

        suggestionsList.innerHTML = '';

        suggestions.forEach(function (suggestion) {
            const listItem = document.createElement('div');
            listItem.classList.add('suggestion');
            listItem.textContent = suggestion;
            suggestionsList.appendChild(listItem);
        });

        suggestionsSection.style.display = 'block';
    }
});
