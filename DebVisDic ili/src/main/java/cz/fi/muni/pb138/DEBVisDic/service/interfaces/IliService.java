package cz.fi.muni.pb138.DEBVisDic.service.interfaces;

import java.io.IOException;

/**
 * Interface for IliService class, every method is specific to by which is named after because each file needed special treatment
 *
 * @author Tomas Kopecky
 */
public interface IliService {

    /**
     * Method goes line by line in file (ili-map-pwn31.tab) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTab31(String id) throws IOException;

    /**
     * Method goes line by line in file (ili-map-pwn30.tab) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTab30(String id) throws IOException;

    /**
     * Method goes line by line in file (ili-map-wn30.ttl) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTtl30(String id) throws IOException;

    /**
     * Method goes line by line in file (ili-map-wn31.ttl) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTtl31(String id) throws IOException;

    /**
     * Method goes line by line in file (ili-map-odwn13.ttl) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTtl13(String id) throws IOException;

    /**
     * Method goes line by line in file (ili-map.ttl) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliTtlMap(String id) throws IOException;

    /**
     * Method goes line by line in file (changes-in-wn31.csv) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliCsv(String id) throws IOException;

    /**
     * Method goes line by line in file (ili.ttl) and looking for matching ID and returns ILI
     *
     * @param id ID of element we are looking for as string
     * @return string value of ILI
     * @throws IOException IOException is thrown, when something went wrong (e.g. file could not be opened)
     */
    String getIliMainTtl(String id) throws IOException;

}
